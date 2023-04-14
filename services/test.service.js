const db = require('../db')

class TestService{
    async createTest(test){
        const newTest = await db.query('INSERT INTO Tests (test_id, test_creator_id, test_title, test_description, test_type_id, test_by_invitation, test_invitation_key, test_date_of_creation) values ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
            [test.test_id, test.test_creator_id, test.test_title, test.test_description, test.test_type_id, test.test_by_invitation, test.test_invitation_key, test.test_date_of_creation])
        return newTest.rows[0]
    }

    async getTests(){
        const tests = await db.query('SELECT * FROM Tests')
        return tests.rows
    }

    async getTestsByCreatorId(id){
        if (id === "null" || id === ""){
            return ''
        }
        else{
            const tests = await db.query('SELECT test_id, test_title, test_description, test_type_id FROM Tests WHERE test_creator_id= $1', [id])
            return tests.rows
        }
    }

    async getTestByInvitationKey(key){
        if (key === "null" || key === ""){
            return ''
        }
        else{
            const test = await db.query('SELECT test_id, test_title, test_description, test_type_id FROM Tests WHERE test_invitation_key= $1', [key])
            return test.rows[0]
        }
    }

    async getTestById(id){
        if (id === "null" || id === ""){
            return ''
        }
        else{
            const test = await db.query('SELECT test_title, test_description FROM Tests WHERE test_id= $1', [id])
            return test.rows[0]
        }
    }

    async updateTest(test){
        const uTest = await db.query('UPDATE Tests set test_creator_id= $1, test_title = $2, test_description = $3, test_type_id = $4, test_by_invitation = $5, test_invitation_key = $6, test_date_of_creation = $7 where test_id = $8 RETURNING *',
        [test.test_creator_id, test.test_title, test.test_description, test.test_type_id, test.test_by_invitation, test.test_invitation_key, test.test_date_of_creation, test.test_id])
        return uTest.rows[0]
    }

    async deleteTest(id){
        const test = await db.query('DELETE FROM Tests WHERE id= $1', [id])
        return test.rows[0]
    }
}

module.exports = new TestService()