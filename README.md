# atlas-frontend-challenge

Este projeto foi desenvolvido como teste técnico para a posição de **Pessoa Desenvolvedora Front-end** da **Atlas Technologies**.

O objetivo foi construir um marketplace para listagem de profissionais de TI contendo pesquisa, filtros avançados, ordenação, paginação e página de detalhes.

## API

Para a API optei por utilizar **json-server** em conjunto com **faker.js** permitindo gerar uma base de dados completamente personalizada e reproduzível para atender os requisitos do desafio.

Essa abordagem trouxe liberdade para modelar os dados exatamente conforme a necessidade da aplicação, além de facilitar a implementação de filtros mais próximos de uma API real.

A API possui as seguintes funcionalidades:

- Geração de uma listagem com mais de 500 profissionais
- Profissões, cidades e empresas geradas através de listas pré-definidas, facilitando a implementação dos filtros
- Paginação
- Ordenação por nota de avaliação e salário
- Busca por termo por nome do profissional ou profissão
- Filtros de múltipla seleção por profissão e cidade
- Endpoint para retorno das profissões disponíveis
- Endpoint para retorno das cidades disponíveis

## Imagens dos profissionais

A escolha da fonte das imagens passou por algumas etapas durante o processo de desenvolvimento.

Inicialmente foram utilizados os avatares disponibilizados pelo próprio faker.js, porém essa solução possuía pouca flexibilidade em relação ao formato e resolução das imagens.

Em seguida foi testado o DiceBear, que oferece diversas possibilidades de customização, como geração de imagens em formato webp e diferentes tamanhos. Apesar de ter considerado uma boa opção, as imagens eram geradas sob demanda a cada requisição. Durante os testes isso ocasionou tempos relativamente altos de geração (~700ms por imagem) e em alguns momentos, imagens quebradas devido ao grande volume de requisições simultâneas.

Como solução definitiva, optei por armazenar localmente um conjunto de imagens em formato webp dentro do projeto. Além de eliminar a dependência de serviços externos, essa abordagem permitiu posteriormente utilizar o Nuxt Image para otimização automática das imagens.

## Personalização dos dados

Alguns campos também foram gerados de forma personalizada para facilitar funcionalidades futuras do front-end.

Um exemplo foi a nota de avaliação do profissional, gerada como número decimal com variação fixa de 0.5, permitindo representar corretamente estrelas completas e meias estrelas no componente de avaliação.

## Front-end

Durante o desenvolvimento procurei utilizar recursos do próprio Nuxt com foco em desempenho.

Entre eles:

- **useAsyncData** para realizar o carregamento inicial da listagem do lado do servidor (SSR)
- **NuxtImg** para geração de imagens responsivas com srcset automaticamente
- Imagens em formato webp com resolução otimizada de 120x120
- **NuxtFonts** para otimizar carregamento e cache das fontes

Além disso, algumas otimizações adicionais foram implementadas:

- Priorização do carregamento da imagem do primeiro card utilizando **loading="eager"** e **fetchpriority="high"**
- **Lazy loading** das imagens dos demais cards
- Carregamento sob demanda do modal de filtros através de **defineAsyncComponent**, permitindo que esse componente seja separado em um chunk independente e carregado apenas quando necessário

## Arquitetura de busca orientada à URL

Toda a navegação da listagem foi construída utilizando os query params da URL como fonte única da verdade para os filtros da aplicação.

Os componentes de busca, filtros, paginação e ordenação possuem apenas a responsabilidade de atualizar os parâmetros da URL.

A página de listagem observa essas alterações, sincroniza a store do Pinia e realiza uma nova busca na API utilizando os parâmetros atualizados.

Essa abordagem trouxe algumas vantagens:

- URLs compartilháveis
- Preservação do estado da listagem ao atualizar a página
- Navegação utilizando os botões voltar/avançar do navegador
- Separação clara de responsabilidades entre componentes, store e camada de dados

## Arquitetura do projeto

Apesar de o projeto utilizar Vue 3, optei por combinar Composition API e Options API.

A Composition API foi utilizada apenas nas páginas de listagem e detalhes, por concentrarem o uso dos composables nativos do Nuxt, como:

- **useAsyncData**
- **useRoute**
- **useSeoMeta**

Já os componentes reutilizáveis foram desenvolvidos utilizando Options API, por preferência pessoal e por considerar que, para componentes pequenos e médios, sua organização permanece bastante clara e objetiva.

## Cobertura de testes

Para demonstrar a cobertura dos testes unitários, foram escolhidos componentes com diferentes níveis de responsabilidade.

### Rating

Validação da lógica responsável pela renderização das estrelas.

Foram testados cenários como:

- Estrelas completas
- Meia estrela
- Estrelas vazias
- Limite máximo de cinco estrelas mesmo quando o valor informado ultrapassa esse limite

### Pagination

Validação da regra responsável pelo cálculo das páginas visíveis, garantindo o correto posicionamento da página atual no conjunto exibido.

### Card

Validação da renderização das informações do profissional.

Comportamento de priorização do carregamento das imagens do primeiro card em relação aos demais.

## Tecnologias utilizadas

- Nuxt
- Vue 3
- TypeScript
- Pinia
- Tailwind CSS
- Faker.js
- json-server
- Vue Test Utils
- Vitest

## Como executar o projeto

### API:

`git clone https://github.com/giselevizioli/atlas-frontend-challenge.git`
`cd atlas-frontend-challenge`
`cd api`
`npm i`
`node generator.js`
`node server.js`

### Front:

`cd frontend`
`npm i`
`npm run build`
`npm run preview`

## Uso de IA

Ferramentas de IA foram utilizadas como apoio durante o desenvolvimento, sem substituição das decisões de arquitetura e implementação.

ChatGPT:

- Auxílio na escolha da estratégia para geração da API mock
- Revisão de código
- Auxílio na cobertura dos testes unitários
- Revisão da documentação

Figma AI:

- Geração do layout inicial da interface
