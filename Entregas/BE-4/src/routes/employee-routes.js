const { Router } = require('express');
const controllers = require('../controllers/employee-controller')

const router = Router();

router.route('/')
    .get(controllers.getAllEmployees)
    .post(controllers.registerEmployee);

router.route('/:id')
    .get(controllers.getEmployeeById)
    .put(controllers.updateEmployee)
    .delete(controllers.deleteEmployee);

module.exports = router