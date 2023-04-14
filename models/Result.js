class Result{
    constructor(result_id, user_id, test_id, test_creator_id, result_by_invitation, test_type_id, date_of_passage, result_comment) {
        this.result_id = result_id
        this.user_id = user_id
        this.test_id = test_id
        this.test_creator_id = test_creator_id
        this.result_by_invitation = result_by_invitation
        this.test_type_id = test_type_id
        this.date_of_passage = date_of_passage
        this.result_comment = result_comment
    }
}

module.exports = Result