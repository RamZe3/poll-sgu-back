const db = require('../db')
const UserService = require('../services/user.service')
const User = require("../models/User");
class UserController{
    async createUser(req, res){
        const {user_email, user_login, user_password, user_roles_array, user_tests_by_invite_array} = req.body
        const user = new User(user_email, user_login, user_password, user_roles_array, user_tests_by_invite_array)
        //console.log(res.body)
        //res.json(user)
        const newPerson = await UserService.createUser(user)
        res.json(newPerson)
    }

    async getUsers(req, res){
        const users = await UserService.getUsers()
        res.json(users)
    }

    async getUserById(req, res){
        const id = req.params.id
        const user = await UserService.getUserById(id)
        res.json(user)
    }

    async getUserByLoginAndPass(req, res){
        const {login, password} = req.query
        const user = await UserService.getUserByLoginAndPass(login, password)
        res.json(user)
    }

    async updateUser(req, res){
        const {id, login, email, password} = req.body
        const user = new User(login, email, password, id)
        const uUser = await UserService.updateUser(user)
        res.json(uUser)
    }

    async deleteUser(req, res){
        const id = req.params.id
        const user = await UserService.deleteUser(id)
        res.json(user)
    }
}

module.exports = new UserController()