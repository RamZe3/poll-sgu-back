const Router = require('express')
const router = new Router()
const testController = require('../controllers/test.controller.js')

router.post('/tests', testController.createTest)
router.get('/tests', testController.getTests)
router.get('/tests/:test_id', testController.getTestById)
router.put('/tests', testController.updateTest)
router.delete('/tests/:id', testController.deleteTest)

module.exports = router