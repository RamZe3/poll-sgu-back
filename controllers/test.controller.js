const db = require('../db')
const TestService = require('../services/test.service')
const QuestionService = require('../services/question.service')
const Test = require("../models/Test");
class TestController{
    async createTest(req, res){
        const {test_id, test_creator_id, test_title, test_description, test_type_id, test_by_invitation, test_invitation_key, test_date_of_creation} = req.body
        const test = new Test(test_id, test_creator_id, test_title, test_description, test_type_id, test_by_invitation, test_invitation_key, test_date_of_creation)
        const newTest = await TestService.createTest(test)
        res.json(newTest)
    }

    async getTests(req, res){
        const tests = await TestService.getTests()
        res.json(tests)
    }

    async getTestsByCreatorId(req, res){
        const id = req.params.test_creator_id
        const test = await TestService.getTestsByCreatorId(id)
        res.json(test)
    }

    async getTestByInvitationKey(req, res){
        const key = req.params.test_invitation_key
        const test = await TestService.getTestByInvitationKey(key)
        res.json(test)
    }

    async getTestById(req, res){
        const id = req.params.test_id
        let test = await TestService.getTestById(id)

        res.json(test)
    }

    async updateTest(req, res){
        const {test_id, test_creator_id, test_title, test_description, test_type_id, test_by_invitation, test_invitation_key, test_date_of_creation} = req.body
        const test = new Test(test_creator_id, test_title, test_description, test_type_id, test_by_invitation, test_invitation_key, test_date_of_creation, test_id)
        const uTest = await TestService.updateTest(test)
        res.json(uTest)
    }

    async deleteTest(req, res){
        const id = req.params.test_id
        const test = await TestService.deleteTest(id)
        res.json(test)
    }
}

module.exports = new TestController()