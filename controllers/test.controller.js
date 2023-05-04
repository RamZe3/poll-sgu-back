const db = require('../db')
const TestService = require('../services/test.service')
const QuestionService = require('../services/question.service')
const AnswerService = require('../services/answer.service')
const Test = require("../models/Test");
class TestController{
    async createTest(req, res){
        const {test_creator_id, test_title, test_description, test_type, test_by_invitation, test_invitation_key, test_date_of_creation, test_questions} = req.body
        const test = new Test(test_creator_id, test_title, test_description, test_type, test_by_invitation, test_invitation_key, test_date_of_creation)
        const newTest = await TestService.createTest(test)

        let newTestQuestions = []

        for (let i = 0; i < test_questions.length; i++){
            test_questions[i].test_id = newTest.test_id
            const newQuestion = await QuestionService.createQuestion(test_questions[i])
            
            for (let k = 0; k < test_questions[i].answers.length; k++){
                test_questions[i].answers[k].question_id = newQuestion.question_id
                AnswerService.createAnswer(test_questions[i].answers[k])
            }
            newTestQuestions.push(test_questions[i])
            
        }

        // если test_type психа, то создавать баллинг в квешчене

        newTest.test_questions = newTestQuestions

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