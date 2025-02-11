## API Restaurante

Esta API permite a interação entre os pedidos enviados pelo garçom e a cozinha de um restaurante. O sistema gerencia mesas, pedidos e itens, garantindo um fluxo eficiente de operação.

### Funcionalidades

A API oferece as seguintes funcionalidades:

#### Módulo Garçom

*   **Abertura de Mesa:** O garçom pode abrir uma mesa, informando o número da mesa e, opcionalmente, o nome do cliente. O pedido é inicializado com status "Rascunho".
*   **Elaboração de Pedido:** O garçom pode adicionar itens ao pedido, selecionando a categoria (ex: Bebidas, Pizzas, Sobremesas) e o produto (ex: Coca Cola 1l, Pizza de Frango, Pavê de Maracujá).
*   **Envio de Pedido:** O garçom pode enviar o pedido para a cozinha. O status do pedido é atualizado para "Enviado".
*   **Exclusão de Pedido:** O garçom pode excluir um pedido, liberando a mesa para ser utilizada novamente (no caso de desistência do cliente).

#### Módulo Cozinha

*   **Visualização de Pedidos:** A cozinha pode visualizar todos os pedidos enviados, com detalhes sobre os itens e o status.
*   **Cadastro de Categorias:** A cozinha pode cadastrar novas categorias de produtos.
*   **Cadastro de Produtos:** A cozinha pode cadastrar novos produtos, associando-os a uma categoria.
*   **Gerenciamento de Usuários:** A cozinha pode cadastrar novos usuários (garçons, cozinheiros, etc.) e gerenciar seus acessos.

### Tecnologias Utilizadas

*   <img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" width="20"/> **TypeScript:** Linguagem de programação que adiciona tipagem estática ao JavaScript.
*   <img src="https://www.postgresql.org/media/img/about/press/elephant.png" width="20"/> **PostgreSQL:** Banco de dados relacional.
*   <img src="https://expressjs.com/images/favicon.png" width="20"/> **Express:** Framework web para Node.js.
*   <img src="https://avatars.githubusercontent.com/u/17219288?s=200&v=4" width="20"/> **Prisma:** ORM para facilitar o acesso ao banco de dados.
*   <img src="https://jwt.io/img/pic_logo.svg" width="20"/> **JWT (JSON Web Token):** Padrão para autenticação e autorização de usuários.
*   <img src="https://img.icons8.com/ios-filled/20/000000/password.png"/> **bcryptjs:** Biblioteca para criptografia de senhas.
*   <img src="https://img.icons8.com/ios-filled/20/000000/globe.png"/> **cors:** Middleware para habilitar o CORS (Cross-Origin Resource Sharing).
*   <img src="https://img.icons8.com/ios-filled/20/000000/settings.png"/> **dotenv:** Biblioteca para carregar variáveis de ambiente de um arquivo .env.
*   <img src="https://img.icons8.com/ios-filled/20/000000/upload.png"/> **multer:** Middleware para lidar com uploads de arquivos.

### Estrutura do Projeto

```
node_modules/         # Dependências do projeto
prisma/               # Arquivos de configuração e migrações do Prisma
src/                  # Código fonte da API
  @types/             # Definições de tipos para o Express
  config/             # Arquivos de configuração
    multer.ts         # Configuração do Multer
  controllers/        # Controladores da API
    category/         # Controladores relacionados a categorias
    order/            # Controladores relacionados a pedidos
    product/          # Controladores relacionados a produtos
    user/             # Controladores relacionados a usuários
  middlewares/        # Middlewares da API
    isAuthenticated.ts # Middleware de autenticação
  services/           # Serviços da API
    category/         # Serviços relacionados a categorias
    order/            # Serviços relacionados a pedidos
    product/          # Serviços relacionados a produtos
    user/             # Serviços relacionados a usuários
  routes.ts           # Rotas da API
  server.ts           # Arquivo principal da API
tmp/                  # Arquivos temporários (Imagens dos produtos criados)
.env                  # Variáveis de ambiente
.gitignore            # Arquivos ignorados pelo Git
package-lock.json     # Versões exatas das dependências
package.json          # Informações do projeto
README.md             # Documentação do projeto
tsconfig.json         # Configuração do TypeScript
```

### Rotas da API

#### Usuários

*   **POST /users:** Criar usuário
*   **POST /session:** Logar usuário
*   **GET /me:** Detalhes do usuário

#### Categorias

*   **POST /category:** Criar categoria
*   **GET /category:** Listar todas as categorias

#### Produtos

*   **POST /product:** Cadastrar produto
*   **GET /category/product?category\_id={id}:** Listar produtos por categoria

#### Pedidos

*   **POST /order:** Criar pedido / Abrir mesa
*   **DELETE /order?order\_id={id}:** Deletar pedido
*   **POST /order/add:** Adicionar item ao pedido
*   **DELETE /order/remove?item\_id={id}:** Remover item do pedido
*   **PUT /order/send:** Enviar pedido
*   **GET /orders:** Listar pedidos
*   **GET /order/detail?order\_id={id}:** Detalhes do pedido
*   **PUT /order/finish:** Finalizar pedido

### Testes com Postman

A collection do Postman com os testes da API está estruturada da seguinte forma:

```
API Restaurante
├── Users
│   ├── POST Criar Usuário
│   ├── POST Logar Usuário
│   └── GET Detalhes do Usuário
├── Category
│   ├── POST Criar Categoria
│   └── GET Listar Todas as Categorias
├── Product
│   ├── POST Cadastrar Produto
│   └── GET Listar Produtos por Categoria
└── Order
    ├── POST Criar um Pedido / Abrir Mesa
    ├── DELETE Deletar Pedido
    ├── POST Adicionar um Item ao Pedido
    ├── DELETE Remover Item de um Pedido
    ├── PUT Enviar Pedido
    ├── GET Listar Pedidos
    ├── GET Detalhes de um Pedido
    └── PUT Finalizar Pedido
```

Cada teste individual corresponde a uma requisição HTTP para um endpoint da API, como os exemplos listados na seção "Rotas da API". Os testes verificam o código de status da resposta, o formato dos dados retornados e outros aspectos relevantes da funcionalidade.

### Instalação e Execução

1.  Clone este repositório: `git clone https://github.com/WesleyBSa/API-Restaurante.git`
2.  Instale as dependências: `npm install`
3.  Configure as variáveis de ambiente no arquivo .env.
4.  Inicie o servidor: `npm run dev`

### Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.

### Licença

Este projeto está sob a licença MIT.

