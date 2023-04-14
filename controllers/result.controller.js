const db = require('../db')
const ResultService = require('../services/result.service')
const Result = require("../models/Result");
class ResultController{
    async createResult(req, res){
        const {result_id, user_id, test_id, test_creator_id, result_by_invitation, test_type_id, date_of_passage, result_comment} = req.body
        const result = new Result(result_id, user_id, test_id, test_creator_id, result_by_invitation, test_type_id, date_of_passage, result_comment)
        const newResult = await ResultService.createResult(result)
        res.json(newResult)
    }

    async getResults(req, res){
        const results = await ResultService.getResults()
        res.json(results)
    }

    async getResultsByUserId(req, res){
        const id = req.params.user_id
        const results = await ResultService.getResultsByUserId(id)
        res.json(results)
    }

    async getResultsByCreatorId(req, res){
        const id = req.params.test_creator_id
        const results = await ResultService.getResultsByCreatorId(id)
        res.json(results)
    }

    async getResultByUserAndTestId(req, res){
        const {user_id, test_id} = req.query
        const result = await ResultService.getResultByUserAndTestId(user_id, test_id)
        res.json(result)
    }

    async updateResult(req, res){
        const {result_id, user_id, test_id, test_creator_id, result_by_invitation, test_type_id, date_of_passage, result_comment} = req.body
        const result = new Result(user_id, test_id, test_creator_id, result_by_invitation, test_type_id, date_of_passage, result_comment, result_id)
        const uResult = await ResultService.updateResult(result)
        res.json(uResult)
    }

    async deleteResult(req, res){
        const id = req.params.result_id
        const result = await ResultService.deleteResult(id)
        res.json(result)
    }
}

module.exports = new ResultController()