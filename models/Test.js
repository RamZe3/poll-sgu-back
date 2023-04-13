class Test {
    constructor(id, creator_id, by_invitation, title, description, type, questions, date_of_creation, ballings, invitation_key) {
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
    }
}

module.exports = Test

// newTest: {
//     id: null,
//         creator_id: null,
//         by_invitation: false,
//         title: null,
//         description: null,
//
//         //type: Psiho, Default
//         type: null,
//         questions: [
//         {
//             id: null,
//             number: 0,
//             question_text: "",
//             answers: [
//                 {
//                     "number": 0,
//                     "title": ""
//                 },
//             ],
//         },
//     ]
// },
// ballings: [
//     {
//         id: null,
//         number: 0,
//         minValue: null,
//         maxValue: null,
//         answer: '',
//     }
// ],
//     count: 1,
//     answersCount: 0,
// }