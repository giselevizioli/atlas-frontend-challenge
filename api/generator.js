const { faker } = require('@faker-js/faker');
const fs = require('fs');

faker.locale = 'pt_BR';

const professions = [
  {
    slug: 'frontend',
    name: 'Desenvolvedor Front-end'
  },
  {
    slug: 'designer-ux',
    name: 'Designer UX'
  },
  {
    slug: 'backend',
    name: 'Desenvolvedor Back-end'
  },
  {
    slug: 'fullstack',
    name: 'Desenvolvedor Full-stack'
  },
  {
    slug: 'network-analyst',
    name: 'Analista de Redes'
  },
  {
    slug: 'infrastructure-analyst',
    name: 'Analista de Infraestrutura'
  },
  {
    slug: 'tech-lead',
    name: 'Tech Lead'
  },
  {
    slug: 'qa',
    name: 'QA'
  },
  {
    slug: 'project-manager',
    name: 'Gerente de Projetos'
  },
  {
    slug: 'it-coordinator',
    name: 'Coordenador de TI'
  },
  {
    slug: 'support-analyst',
    name: 'Analista de Suporte Técnico'
  },
  {
    slug: 'air-conditioning-analyst',
    name: 'Analista de Ar-condicionado'
  },
  {
    slug: 'scrum-master',
    name: 'Scrum Master'
  }
];

const cities = [
  {
    city: 'São Paulo',
    state: 'SP'
  },
  {
    city: 'Campinas',
    state: 'SP'
  },
  {
    city: 'Santos',
    state: 'SP'
  },
  {
    city: 'Rio de Janeiro',
    state: 'RJ'
  },
  {
    city: 'Niterói',
    state: 'RJ'
  },
  {
    city: 'Belo Horizonte',
    state: 'MG'
  },
  {
    city: 'Uberlândia',
    state: 'MG'
  },
  {
    city: 'Curitiba',
    state: 'PR'
  },
  {
    city: 'Londrina',
    state: 'PR'
  },
  {
    city: 'Florianópolis',
    state: 'SC'
  },
  {
    city: 'Joinville',
    state: 'SC'
  },
  {
    city: 'Porto Alegre',
    state: 'RS'
  },
  {
    city: 'Brasília',
    state: 'DF'
  },
  {
    city: 'Salvador',
    state: 'BA'
  },
  {
    city: 'Recife',
    state: 'PE'
  },
  {
    city: 'Fortaleza',
    state: 'CE'
  }
];

const companies = [
  'Accenture',
  'IBM',
  'Google',
  'Microsoft',
  'Oracle',
  'TOTVS',
  'CI&T',
  'Stefanini',
  'Compass UOL',
  'BRQ',
  'NTT Data',
  'Capgemini'
];

const professionals = [];

for (let i = 1; i <= 500; i++) {
  const profession =
    professions[Math.floor(Math.random() * professions.length)];
  const location = cities[Math.floor(Math.random() * cities.length)];
  const company = companies[Math.floor(Math.random() * companies.length)];

  professionals.push({
    id: i,
    name: faker.person.fullName(),
    profession: profession.name,
    professionSlug: profession.slug,
    avatar: faker.image.avatar(),
    price: faker.number.int({
      min: 3000,
      max: 25000
    }),
    phone: faker.phone.number(),
    email: faker.internet.email(),
    city: location.city,
    state: location.state,
    description: faker.lorem.paragraphs(2),
    rating: faker.number.float({
      min: 1,
      max: 5,
      fractionDigits: 1
    }),
    age: faker.number.int({
      min: 18,
      max: 65
    }),
    company
  });
}

fs.writeFileSync(
  './db.json',
  JSON.stringify(
    {
      professionals
    },
    null,
    2
  )
);
