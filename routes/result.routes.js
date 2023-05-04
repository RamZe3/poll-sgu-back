const Router = require('express')
const router = new Router()
const resultController = require('../controllers/result.controller.js')

router.post('/results', resultController.createResult)
router.get('/results', resultController.getResults)
router.get('/results/:result_id', resultController.getResultByUserAndTestId)
router.put('/results', resultController.updateResult)
router.delete('/results/:id', resultController.deleteResult)

module.exports = router