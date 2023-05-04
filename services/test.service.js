const db = require('../db')
const Test = require("../models/Test");

class TestService{
    async createTest(test){
        const newTest = await db.query('INSERT INTO Tests (test_creator_id, test_title, test_description, test_type_id, test_by_invitation, test_invitation_key, test_date_of_creation) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [test.test_creator_id, test.test_title, test.test_description, test.test_type_id, test.test_by_invitation, test.test_invitation_key, test.test_date_of_creation])
        return newTest.rows[0]
    } 

    async getTestById(id){
        if (id === "null" || id === ""){ 
            return ''
        }
        else{
            let test = await db.query('SELECT * FROM Tests WHERE test_id= $1', [id])
            const questions = await db.query('SELECT question_id, question_text, question_number FROM Questions WHERE test_id=$1', [id])
            test.rows[0].test_questions = questions.rows
            for (let question of test.rows[0].test_questions){
                const answers = await db.query('SELECT * FROM AnswerOptions WHERE question_id=$1', [question.question_id])
                for (let i = 0; i < answers.rows.length; i++){
                    question.answers = answers.rows
                }
            }
            return test.rows[0]
        }
    }

    async getTests(){
        let tests = await db.query('SELECT * FROM Tests')
        for (let test of tests.rows) {
            const questions = await db.query('SELECT question_id, question_text, question_number FROM Questions WHERE test_id=$1', [test.test_id])
            test.test_questions = questions.rows
            for (let question of test.test_questions){
                const answers = await db.query('SELECT * FROM AnswerOptions WHERE question_id=$1', [question.question_id])
                for (let i = 0; i < answers.rows.length; i++){
                    question.answers = answers.rows
                }
            }
        }

        return tests.rows
    }

    async getTestsByCreatorId(id){
        let tests = await db.query('SELECT * FROM Tests WHERE test_creator_id = $1',[id])
        for (let test of tests.rows) {
            const questions = await db.query('SELECT question_id, question_text, question_number FROM Questions WHERE test_id=$1', [test.test_id])
            test.test_questions = questions.rows
            for (let question of test.test_questions){
                const answers = await db.query('SELECT * FROM AnswerOptions WHERE question_id=$1', [question.question_id])
                for (let i = 0; i < answers.rows.length; i++){
                    question.answers = answers.rows
                }
            }
        }
        return tests.rows
    }

    // не работает пока

    // async getTestByInvitationKey(key){
    //     let test = await db.query('SELECT * FROM Tests WHERE test_invitation_key= \'loh\'')
    //     const questions = await db.query('SELECT question_id, question_text, question_number FROM Questions WHERE test_id=$1', [test.test_id])
    //     test.rows[0].test_questions = questions.rows
    //     for (let question of test.rows[0].test_questions){
    //         const answers = await db.query('SELECT * FROM AnswerOptions WHERE question_id=$1', [question.question_id])
    //         for (let i = 0; i < answers.rows.length; i++){
    //             question.answers = answers.rows
    //         }
    //     }
    //     return test.rows[0]
    // }

    async updateTest(test){
        const uTest = await db.query('UPDATE Tests set test_creator_id= $1, test_title = $2, test_description = $3, test_type_id = $4, test_by_invitation = $5, test_invitation_key = $6, test_date_of_creation = $7 where test_id = $8 RETURNING *',
        [test.test_creator_id, test.test_title, test.test_description, test.test_type_id, test.test_by_invitation, test.test_invitation_key, test.test_date_of_creation, test.test_id])
        return uTest.rows[0]
    }

    async deleteTest(id){
        const test = await db.query('DELETE FROM Tests WHERE test_id= $1', [id])
        return test.rows[0]
    }
}

module.exports = new TestService()