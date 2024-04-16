const express = require('express');
const router = express.Router();
const setGetRouters = require('../../config/routersFunctions/setGetRouter')
const setPostRouters = require('../../config/routersFunctions/setPostRouter')
const setPutRouters = require('../../config/routersFunctions/setPutRouter')
const setDeleteRouters = require('../../config/routersFunctions/setDeleteRouter')
const routerController = require('../controllers/controllers')

setGetRouters(router, '/', routerController)




const a = (req, res) => {
  return res.status(200).json({message: 'Rota get vagas.'})
}

setGetRouters(router, '/api/vagas', a)
// router.get('/api/vagas', a)

module.exports = router;