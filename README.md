# CRUD API com Node.js Puro

Esta é uma aplicação de CRUD (Create, Read, Update, Delete) desenvolvida em Node.js puro. 
A aplicação utiliza uma biblioteca de parsing para transformar dados em objetos e persiste 
os dados em um banco de dados db.json. Além disso, permite a importação de dados em massa 
via arquivos CSV, utilizando streams.

## Funcionalidades

Criação de registros (POST)<br>
Leitura de registros (GET)<br>
Atualização de registros (PUT/PATCH)<br>
Exclusão de registros (DELETE)<br>
Importação de dados em massa via CSV<br>
Tecnologias Utilizadas<br>
Node.js: Back-end desenvolvido em Node.js puro.<br>
Biblioteca de Parsing: Utilizada para transformar dados CSV em objetos JavaScript.<br>
File System (fs): Para manipulação do arquivo db.json.<br>
Streams: Implementação de streams para importar grandes volumes de dados a partir de arquivos CSV.<br>


## Endpoints
GET /tasks :Retorna todas as tasks.<br>
POST /tasks/:id :Cria um nova task.<br>
PUT /tasks/:id :Atualiza uma task <br>
PATCH /tasks/:id/complete :Atualiza um item exclusivamente da task.<br>
DELETE /tasks/:id Remove um item pelo ID.<br>

Contribuição
Fique à vontade para abrir issues e pull requests.

Licença
Este projeto está licenciado sob a Licença MIT.
