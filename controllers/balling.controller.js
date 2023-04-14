const db = require('../db')
const BallingService = require('../services/balling.service')
const Balling = require("../models/Balling");
class BallingController{
    async createBalling(req, res){
        const {balling_id, test_id, balling_number, balling_min_value, balling_max_value, balling_auto_result} = req.body
        const balling = new Balling(balling_id, test_id, balling_number, balling_min_value, balling_max_value, balling_auto_result)
        const newBalling = await BallingService.createBalling(balling)
        res.json(newBalling)
    }

    async getBallings(req, res){
        const ballings = await BallingService.getBallings()
        res.json(ballings)
    }

    async getBallingByTestId(req, res){
        const id = req.params.test_id
        const balling = await BallingService.getBallingByTestId(id)
        res.json(balling)
    }

    async updateBalling(req, res){
        const {balling_id, test_id, balling_number, balling_min_value, balling_max_value, balling_auto_result} = req.body
        const balling = new Balling(test_id, balling_number, balling_min_value, balling_max_value, balling_auto_result, balling_id)
        const uBalling = await BallingService.updateBalling(balling)
        res.json(uBalling)
    }

    async deleteBalling(req, res){
        const id = req.params.balling_id
        const balling = await BallingService.deleteBalling(id)
        res.json(balling)
    }
}

module.exports = new BallingController()