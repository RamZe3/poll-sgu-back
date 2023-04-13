class Result{
    constructor(id, creator_id, by_invitation, title, description, type, questions, date_of_creation, ballings, invitation_key, test_id, date_of_passage, user_id, comment) {
        this.id = id
        this.creator_id = creator_id
        this.by_invitation = by_invitation
        this.title = title
        this.description = description
        this.type = type
        this.questions = questions
        this.date_of_creation = date_of_creation
        this.ballings = ballings
        this.invitation_key = invitation_key
        this.test_id = test_id
        this.date_of_passage = date_of_passage
        this.user_id = user_id
        this.comment = comment
    }
}

module.exports = Result