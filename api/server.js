const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.get('/professionals', (req, res) => {
  let professionals = router.db.get('professionals').value();

  const { professionSlug, search, sort, page = 1, perPage = 12 } = req.query;

  const order = req.query.order === 'desc' ? 'desc' : 'asc';

  // Filtragem múltipla por profissão
  if (professionSlug) {
    const slugs = professionSlug.split(',').map((item) => item.trim());

    professionals = professionals.filter((item) =>
      slugs.includes(item.professionSlug)
    );
  }

  // Busca por nome ou profissão
  if (search) {
    const searchTerm = search.toLowerCase();

    professionals = professionals.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm) ||
        item.profession.toLowerCase().includes(searchTerm)
    );
  }

  // Ordenação
  const allowedSortFields = ['name', 'profession', 'price', 'rating', 'age'];

  if (sort && allowedSortFields.includes(sort)) {
    professionals.sort((a, b) => {
      let valueA = a[sort];
      let valueB = b[sort];

      if (typeof valueA === 'string') {
        valueA = valueA.toLowerCase();
        valueB = valueB.toLowerCase();
      }

      if (valueA < valueB) {
        return order === 'asc' ? -1 : 1;
      }

      if (valueA > valueB) {
        return order === 'asc' ? 1 : -1;
      }

      return 0;
    });
  }

  // Paginação
  const total = professionals.length;
  const currentPage = Number(page);
  const itemsPerPage = Number(perPage);
  const totalPages = Math.ceil(total / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const hasNextPage = currentPage < totalPages;
  const hasPreviousPage = currentPage > 1;

  const paginatedProfessionals = professionals.slice(start, end);

  // Retorno
  res.json({
    data: paginatedProfessionals,
    pagination: {
      page: currentPage,
      perPage: itemsPerPage,
      total,
      totalPages,
      hasNextPage,
      hasPreviousPage
    }
  });
});

server.use(router);

server.listen(3000, () => {
  console.log('🚀 API rodando em http://localhost:3000');
});
