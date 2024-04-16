const express = require('express');
const router = express.Router();
const routesSetters = require('./routesSetters/routesSetters')
const routerController = require('../controllers/controllers')
const getController = require('../controllers/getController');
const { getAllEmployees, getEmployeeById, registerEmployee, updateEmployee, deleteEmployee, analyzeUserData } = require('../services/services')

//get routers

routesSetters.setGetRouters(router, '/api/data-analysis/employess', (req, res) => {getController(req, res, analyzeUserData(db, 'employees'))});
routesSetters.setGetRouters(router, '/api/data-analysis/candidates', (req, res) => {getController(req, res, analyzeUserData(db, 'candidates'))});

module.exports = router;