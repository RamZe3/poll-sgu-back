class User{
    constructor(user_email, user_login, user_password, user_roles_array, user_tests_by_invite_array, user_id) {
        this.user_id = user_id
        this.user_email = user_email
        this.user_login = user_login
        this.user_password = user_password
        this.user_roles_array = user_roles_array
        this.user_tests_by_invite_array = user_tests_by_invite_array
    }
}

module.exports = User