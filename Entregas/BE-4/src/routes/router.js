const { Router } = require('express');
const employeeRoutes = require('./employee-routes')

const router = Router();

function routes(app) {
    app.use('/api/funcionarios', employeeRoutes)
    app.use('/api/users')

};


module.exports = router;