class User{
    constructor(login, email, password, roles, tests_by_invite,  id) {
        this.id = id
        this.login = login
        this.email = email
        this.password = password
        this.roles = roles
        this.tests_by_invite = tests_by_invite
    }
}

module.exports = User