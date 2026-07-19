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
    citySlug: 'sao-paulo',
    state: 'SP'
  },
  {
    city: 'Campinas',
    citySlug: 'campinas',
    state: 'SP'
  },
  {
    city: 'Santos',
    citySlug: 'santos',
    state: 'SP'
  },
  {
    city: 'Rio de Janeiro',
    citySlug: 'rio-de-janeiro',
    state: 'RJ'
  },
  {
    city: 'Niterói',
    citySlug: 'niteroi',
    state: 'RJ'
  },
  {
    city: 'Belo Horizonte',
    citySlug: 'belo-horizonte',
    state: 'MG'
  },
  {
    city: 'Uberlândia',
    citySlug: 'uberlandia',
    state: 'MG'
  },
  {
    city: 'Curitiba',
    citySlug: 'curitiba',
    state: 'PR'
  },
  {
    city: 'Londrina',
    citySlug: 'londrina',
    state: 'PR'
  },
  {
    city: 'Florianópolis',
    citySlug: 'florianopolis',
    state: 'SC'
  },
  {
    city: 'Joinville',
    citySlug: 'joinville',
    state: 'SC'
  },
  {
    city: 'Porto Alegre',
    citySlug: 'porto-alegre',
    state: 'RS'
  },
  {
    city: 'Brasília',
    citySlug: 'brasilia',
    state: 'DF'
  },
  {
    city: 'Salvador',
    citySlug: 'salvador',
    state: 'BA'
  },
  {
    city: 'Recife',
    citySlug: 'recife',
    state: 'PE'
  },
  {
    city: 'Fortaleza',
    citySlug: 'fortaleza',
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
const avatarCount = 32;

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
    avatar: `/avatars/${String(
      faker.number.int({ min: 1, max: avatarCount })
    )}.webp`,
    price: faker.number.int({
      min: 3000,
      max: 25000
    }),
    phone: faker.phone.number(),
    email: faker.internet.email(),
    city: location.city,
    citySlug: location.citySlug,
    state: location.state,
    description: faker.lorem.paragraphs(2),
    rating: faker.number.int({ min: 2, max: 10 }) / 2,
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
      professions,
      professionals,
      cities
    },
    null,
    2
  )
);
