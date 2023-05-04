const db = require('../db')

class AnswerService{
    async createAnswer(answer){
        const newAnswer = await db.query('INSERT INTO AnswerOptions (question_id, answer_number, answer_title, answer_value) values ($1, $2, $3, $4) RETURNING *',
            [answer.question_id, answer.answer_number, answer.answer_title, answer.answer_value])
        return newAnswer.rows[0]
    }

    async getAnswers(){
        const answers = await db.query('SELECT * FROM Answers')
        return answers.rows
    }

    async getAnswerById(id){
        if (id === "null" || id === ""){
            return ''
        }
        else{
            const answer = await db.query('SELECT answer_text FROM Results WHERE answer= $1', [id])
            return answer.rows[0]
        }
    }

    async updateAnswer(answer){
        const uAnswer = await db.query('UPDATE Results set answer_number = $1, answer_text = $2, answer_value = $3 where answer_id = $4 RETURNING *',
            [answer.answer_number, answer.answer_text, answer.answer_value, answer.answer_id])
        return uAnswer.rows[0]
    }

    async deleteAnswer(id){
        const answer = await db.query('DELETE FROM Answers WHERE answer_id= $1', [id])
        return answer.rows[0]
    }
}

module.exports = new AnswerService()