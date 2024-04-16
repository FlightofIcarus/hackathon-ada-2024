const express = require('express');
const router = express.Router();
const routesSetters = require('./routesSetters/routesSetters')
const routerController = require('../controllers/controllers')
const getController = require('../controllers/getController');

const service = () => {console.log('serviço');}

routesSetters.setGetRouters(router, '/', routerController);
routesSetters.setGetRouters(router, '/api/employees', (req, res) => {getController(req, res, service)})
// routesSetters.setGetRouters(router, '/api/employees/{id}', )
// routesSetters.setGetRouters(router, '/api/data-analysis/employees', )
// routesSetters.setGetRouters(router, '/api/data-analysis/candidates', )
// routesSetters.setGetRouters(router, '/api/jobs', )
// routesSetters.setGetRouters(router, '/api/jobs/{id}', )
// routesSetters.setGetRouters(router, '/api/candidates', )
// routesSetters.setGetRouters(router, '/api/candidates/{id}', )

module.exports = router;


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