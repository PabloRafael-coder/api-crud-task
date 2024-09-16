# CRUD API com Node.js Puro

Esta é uma aplicação de CRUD (Create, Read, Update, Delete) desenvolvida em Node.js puro. A aplicação utiliza uma biblioteca de parsing para transformar dados em objetos e persiste os dados em um banco de dados db.json. Além disso, permite a importação de dados em massa via arquivos CSV, utilizando streams.

## Funcionalidades

Criação de registros (POST)
Leitura de registros (GET)
Atualização de registros (PUT/PATCH)
Exclusão de registros (DELETE)
Importação de dados em massa via CSV
Tecnologias Utilizadas
Node.js: Back-end desenvolvido em Node.js puro.
Biblioteca de Parsing: Utilizada para transformar dados CSV em objetos JavaScript.
File System (fs): Para manipulação do arquivo db.json.
Streams: Implementação de streams para importar grandes volumes de dados a partir de arquivos CSV.


## Endpoints
GET /tasks :Retorna todas as tasks.
POST /tasks/:id :Cria um nova task.
PUT /tasks/:id :Atualiza uma task 
PATCH /tasks/:id/complete :Atualiza um item exclusivamente da task.
DELETE /tasks/:id Remove um item pelo ID.

Contribuição
Fique à vontade para abrir issues e pull requests.

Licença
Este projeto está licenciado sob a Licença MIT.
