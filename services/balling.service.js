const db = require('../db')

class TestService{
    async createBalling(balling){
        const newBalling = await db.query('INSERT INTO Ballings (balling_id, test_id, balling_number, balling_min_value, balling_max_value, balling_auto_result) values ($1, $2, $3, $4, $5) RETURNING *',
            [balling.balling_id, balling.test_id, balling.balling_number, balling.balling_min_value, balling.balling_max_value, balling.balling_auto_result])
        return newBalling.rows[0]
    }

    async getBallings(){
        const ballings = await db.query('SELECT * FROM Tests')
        return ballings.rows
    }

    async getBallingByTestId(test_id){
        if (id === "null" || id === ""){
            return ''
        }
        else{
            const balling = await db.query('SELECT balling_auto_result FROM Ballings WHERE test_id = $1', [test_id])
            return balling.rows[0]
        }
    }

    async updateBalling(balling){
        const uBalling = await db.query('UPDATE Ballings set test_id = $1 balling_number = $2, balling_min_value= $3, balling_max_value = $4, balling_auto_result = $5 where balling_id = $6 RETURNING *',
            [balling.test_id, balling.balling_number, balling.test_id, balling.balling_min_value, balling.balling_max_value, balling.balling_auto_result, balling.balling_id])
        return uBalling.rows[0]
    }

    async deleteBalling(id){
        const balling = await db.query('DELETE FROM Ballings WHERE balling_id= $1', [id])
        return balling.rows[0]
    }
}

module.exports = new TestService()