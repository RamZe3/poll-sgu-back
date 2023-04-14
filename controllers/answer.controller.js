const db = require('../db')
const AnswerService = require('../services/answer.service')
const Answer = require("../models/Answer");
class AnswerController{
    async createAnswer(req, res){
        const {answer_id, answer_number, answer_text, answer_value} = req.body
        const answer = new Answer(answer_id, answer_number, answer_text, answer_value)
        const newAnswer = await AnswerService.createAnswer(user)
        res.json(newAnswer)
    }

    async getAnswers(req, res){
        const answers = await AnswerService.getAnswers()
        res.json(answers)
    }

    async getAnswerById(req, res){
        const id = req.params.answer_id
        const answer = await AnswerService.getAnswerById(id)
        res.json(answer)
    }

    async updateAnswer(req, res){
        const {answer_id, answer_number, answer_text, answer_value} = req.body
        const answer = new Answer(answer_number, answer_text, answer_value, answer_id)
        const uUser = await AnswerService.updateAnswer(answer)
        res.json(uUser)
    }

    async deleteAnswer(req, res){
        const id = req.params.answer_id
        const answer = await AnswerService.deleteAnswer(id)
        res.json(answer)
    }
}

module.exports = new AnswerController()