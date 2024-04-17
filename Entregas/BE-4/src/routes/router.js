const { Router } = require('express');
const employeeRoutes = require('./employee-routes')
const candidateRoutes = require('./candidate-routes')

const router = Router();

function routes(app) {
    app.use('/api/funcionarios', employeeRoutes)
    app.use('/api/candidatos', candidateRoutes)

};


module.exports = router;