const Employee = require('./Employee')

class Engeneer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email)

        this.github = github
    }

    getGitHub() {
        return this.github
    }

    getRole() {
        return 'Engeneer'
    }
}

module.exports = Engeneer