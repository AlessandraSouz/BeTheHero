const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota/Recurso
 * Rota: http://localhost:3333/users
 * Recurso: /users
 */

 /**
  * Métodos HTTP
  * 
  * GET: Buscar uma informação do back-end
  * POST: Criar uma informação no back-end ex: dados de usuário
  * PUT: Alterar uma informação no back-end
  * DELETE: ***
  */

  /**
   * Tipo de parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após o "?" - (Utilizado em filtros e paginação)
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request body: criar e altera recursos
   */



app.listen(3333);
