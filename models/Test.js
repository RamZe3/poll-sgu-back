class Test {
    constructor(test_id, test_creator_id, test_title, test_description, test_type_id, test_by_invitation, test_invitation_key, test_date_of_creation)
    {
        this.test_id = test_id
        this.test_creator_id = test_creator_id
        this.test_title = test_title
        this.test_description = test_description
        this.test_type_id = test_type_id
        this.test_by_invitation = test_by_invitation
        this.test_invitation_key = test_invitation_key
        this.test_date_of_creation = test_date_of_creation
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