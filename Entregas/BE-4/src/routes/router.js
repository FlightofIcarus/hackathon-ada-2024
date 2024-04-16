const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');
const express = require('express');
const router = express.Router();
const routesSetters = require('./routesSetters/routesSetters')
const routerController = require('../controllers/controllers')
const getController = require('../controllers/getController');

const service = () => {console.log('serviço');}

//get routers

// router.use('/api-docs', swaggerUi.serve);
// routesSetters.setGetRouters(router, '/api-docs', swaggerUi.setup(swaggerDocument))
routesSetters.setGetRouters(router, '/', routerController);
routesSetters.setGetRouters(router, '/api/employees', (req, res) => {getController(req, res, service)})
// routesSetters.setGetRouters(router, '/api/employees/{id}', )
// routesSetters.setGetRouters(router, '/api/data-analysis/employees', )
// routesSetters.setGetRouters(router, '/api/data-analysis/candidates', )
// routesSetters.setGetRouters(router, '/api/jobs', )
// routesSetters.setGetRouters(router, '/api/jobs/{id}', )
// routesSetters.setGetRouters(router, '/api/candidates', )
// routesSetters.setGetRouters(router, '/api/candidates/{id}', )

//post routers

// routesSetters.setPostRouters(router, '/api/employees', )
// routesSetters.setPostRouters(router, '/api/login/employees', )
// routesSetters.setPostRouters(router, '/api/login/candidates', )
// routesSetters.setPostRouters(router, '/api/jobs', )
// routesSetters.setPostRouters(router, '/api/candidates', )

//put routers

// routesSetters.setPutRouters(router, '/api/employees/{id}', )
// routesSetters.setPutRouters(router, '/api/jobs/{id}', )
// routesSetters.setPutRouters(router, '/api/candidates/{id}', )

//patch routers

// routesSetters.setPatchRouters(router, '/api/employees/{id}', )
// routesSetters.setPatchRouters(router, '/api/jobs/{id}', )
// routesSetters.setPatchRouters(router, '/api/candidates/{id}', )

//delete routers

// routesSetters.setDeleteRouters(router, '/api/employees/{id}', )
// routesSetters.setDeleteRouters(router, '/api/jobs/{id}', )
// routesSetters.setDeleteRouters(router, '/api/candidates/{id}', )

module.exports = router;

//MAPEAMENTO DE ROTAS

// FUNCIONÁRIOS:
// POST /api/employees
// GET /api/employees
// PUT /api/employees/{id}
// PATCH /api/employees/{id}
// GET /api/employees/{id}
// DELETE /api/employees/{id}

// DADOS DE DIVERSIDADE:
// GET /api/data-analysis/employees
// GET /api/data-analysis/candidates

// AUTENTICAÇÃO:
// POST /api/login/employees
// POST /api/login/candidates

// CADASTRO DE VAGAS:
// POST /api/jobs
// GET /api/jobs
// PUT /api/jobs/{id}
// PATCH /api/jobs/{id}
// GET /api/jobs/{id}
// DELETE /api/jobs/{id}

// CADASTRO DE CANDIDATOS:
// POST /api/candidates
// GET /api/candidates
// PUT /api/candidates/{id}
// PATCH /api/candidates/{id}
// GET /api/candidates/{id}
// DELETE /api/candidates/{id}