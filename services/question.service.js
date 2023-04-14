const db = require('../db')

class QuestionService{
    async createQuestion(question){
        const newQuestion = await db.query('INSERT INTO Questions (question_id, question_number, question_text, question_right_answer_number) values ($1, $2, $3, $4) RETURNING *',
            [question.question_id, question.question_number, question.question_text, question_right_answer_number])
        return newQuestion.rows[0]
    }

    async getQuestions(){
        const questions = await db.query('SELECT * FROM Questions')
        return questions.rows
    }

    async getQuestionById(id){
        if (id === "null" || id === ""){
            return ''
        }
        else{
            const question = await db.query('SELECT question_text FROM Questions WHERE question_id = $1', [id])
            return question.rows[0]
        }
    }

    async updateQuestion(question){
        const uQuestion = await db.query('UPDATE Questions set question_number = $1, question_text= $2, question_right_answer_number = $3 where question_id = $4 RETURNING *',
            [question.question_number, question.question_text, question_right_answer_number, question.question_id])
        return uQuestion.rows[0]
    }

    async deleteQuestion(id){
        const question = await db.query('DELETE FROM Questions WHERE question_id= $1', [id])
        return question.rows[0]
    }
}

module.exports = new QuestionService()