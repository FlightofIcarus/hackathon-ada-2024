const express = require('express');
const router = express.Router();
const setGetRouters = require('../../config/routersFunctions/setGetRouter')
const setPostRouters = require('../../config/routersFunctions/setPostRouter')
const setPutRouters = require('../../config/routersFunctions/setPutRouter')
const setDeleteRouters = require('../../config/routersFunctions/setDeleteRouter')
const routerController = require('../controllers/controllers')

setGetRouters(router, '/', routerController);
setGetRouters(router, '/api/employees', )
setGetRouters(router, '/api/employees/{id}', )
setGetRouters(router, '/api/data-analysis/employees', )
setGetRouters(router, '/api/data-analysis/candidates', )
setGetRouters(router, '/api/jobs', )
setGetRouters(router, '/api/jobs/{id}', )
setGetRouters(router, '/api/candidates', )
setGetRouters(router, '/api/candidates/{id}', )

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