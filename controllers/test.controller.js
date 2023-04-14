const db = require('../db')
const TestService = require('../services/test.service')
const Test = require("../models/Test");
class TestController{
    async createTest(req, res){
        const {login, email, password} = req.body
        const user = new User(login, email, password)
        const newPerson = await TestService.createUser(user)
        res.json(newPerson)
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
        const user = await TestService.getTestById(id)
        res.json(user)
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