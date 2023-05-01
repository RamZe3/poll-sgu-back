const db = require('../db')
const QuestionService = require('../services/question.service')
const Question = require("../models/Question");
class QuestionController{
    async createQuestion(req, res){
        const {question_id, question_number, question_text, question_right_answer_number} = req.body
        const question = new Question(question_id, question_number, question_text, question_right_answer_number)
        const newQuestion = await QuestionService.createQuestion(question)
        res.json(newQuestion)
    }

    async getQuestions(req, res){
        const questions = await QuestionService.getQuestions()
        res.json(questions)
    }

    async getQuestionById(req, res){
        const id = req.params.question_id
        const question = await QuestionService.getQuestionById(id)
        res.json(question)
    }

    async updateQuestion(req, res){
        const {question_id, question_number, question_text, question_right_answer_number} = req.body
        const question = new Question(question_number, question_text, question_right_answer_number, question_id)
        const uQuestion = await QuestionService.updateQuestion(question)
        res.json(uQuestion)
    }

    async deleteQuestion(req, res){
        const id = req.params.id
        const question = await QuestionService.deleteQuestion(id)
        res.json(question)
    }
}

module.exports = new QuestionController()