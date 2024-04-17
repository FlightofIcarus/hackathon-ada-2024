const { Router } = require('express');
const controllers = require('../controllers/candidate-controller')

const router = Router();

router.route('/')
    .post(controllers.createCandidate)


router.route('/:id')


module.exports = router