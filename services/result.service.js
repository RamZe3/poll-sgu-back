const db = require('../db')

class ResultService{
    async createResult(result){
        const newResult = await db.query('INSERT INTO Results (user_id, test_id, test_creator_id, result_by_invitation, test_type_id, date_of_passage, result_comment) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [result.user_id, result.test_id, result.test_creator_id, result.result_by_invitation, result.test_type_id, result.date_of_passage, result.result_comment])
        return newResult.rows[0]
    }

    async getResults(){
        const results = await db.query('SELECT * FROM Results')
        return results.rows
    }

    async getResultsByUserId(id){
        if (id === "null" || id === ""){
            return ''
        }
        else{
            const results = await db.query('SELECT user_id, date_of_passage FROM Results WHERE user_id= $1', [id])
            return results.rows
        }
    }

    async getResultsByCreatorId(id){
        if (id === "null" || id === ""){
            return ''
        }
        else{
            const results = await db.query('SELECT user_id, date_of_passage FROM Results WHERE test_creator_id= $1', [id])
            return results.rows
        }
    }

    async getResultByUserAndTestId(user_id, test_id){
        if ((user_id === "null" || user_id === "") || (test_id === "null" || test_id === "")) {
            return ''
        }
        else{
            const result = await db.query('SELECT result_comment FROM Results WHERE user_id = $1 AND test_id = $2', [user_id, test_id])
            return result.rows[0]
        }
    }

    async updateResult(result){
        const uResult = await db.query('UPDATE Results set user_id= $1, test_id = $2, test_creator_id = $3, result_by_invitation = $4, test_type_id = $5, date_of_passage= $6, result_comment = $7 where result_id = $8 RETURNING *',
        [result.user_id, result.test_id, result.test_creator_id, result.result_by_invitation, result.test_type_id, result.date_of_passage, result.result_comment, result.result_id])
        return uResult.rows[0]
    }

    async deleteResult(id){
        const test = await db.query('DELETE FROM Results WHERE id= $1', [id])
        return test.rows[0]
    }
}

module.exports = new ResultService()