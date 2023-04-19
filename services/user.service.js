const db = require('../db')

class UserService{
    async createUser(user){
        const newUser = await db.query('INSERT INTO users (user_email, user_login, user_password. user_roles_array, user_tests_by_invite_array) values ($1, $2, $3, $5) RETURNING *',
            [user.user_email, user.user_login, user.user_password, user.user_roles_array, user.user_tests_by_invite_array])
        return newUser.rows[0]
    }

    async getUsers(){
        const users = await db.query('SELECT * FROM users')
        return users.rows
    }

    async getUserById(id){
        if (id === "null" || id === ""){
            return ''
        }
        else{
            const user = await db.query('SELECT * FROM users WHERE user_id= $1', [id])
            return user.rows[0]
        }
    }

    async getUserByLoginAndPass(login, password){
        const user = await db.query('SELECT * FROM users WHERE (user_login= $1 OR user_email= $1) AND user_password= $2', [login, password])
        return user.rows[0]
    }

    async updateUser(user){
        const uUser = await db.query('UPDATE users set user_email = $1, user_login= $2, user_password = $3, user_roles_array = $4, user_tests_by_invite_array= $5 where user_id = $6 RETURNING *',
            [user.user_email, user.user_login, user.user_password, user.user_roles_array, user.user_tests_by_invite_array, user.user_id])
        return uUser.rows[0]
    }

    async deleteUser(id){
        const user = await db.query('DELETE FROM users WHERE user_id= $1', [id])
        return user.rows[0]
    }
}

module.exports = new UserService()