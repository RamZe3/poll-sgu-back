const db = require('../db')

class QuestionService{
    async createQuestion(question){
        const newQuestion = await db.query('INSERT INTO Questions (question_number, question_text, question_right_answer_number) values ($1, $2, $3) RETURNING *',
            [question.question_number, question.question_text, question_right_answer_number])
        return newQuestion.rows[0]
    }

    async getQuestions(){
        const questions = await db.query('SELECT * FROM Questions')
        return questions.rows
    }

    async getQuestionsByTestId(id){
        const questions = await db.query('SELECT * FROM Questions WHERE test_id =$1')
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

    async getQuestionByTestId(id){
        if (id === "null" || id === ""){
            return ''
        }
        else{
            const question = await db.query('SELECT q.question_id, q.question_text, q.question_number, q.question_right_answer_number, qt.QuestionsTests FROM QuestionTests AS qt WHERE test_id = $1 JOIN Question AS q ON q.question_id = qt.question_id', [id])
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