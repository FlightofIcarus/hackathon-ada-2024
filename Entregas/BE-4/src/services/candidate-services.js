const { Candidate } = require('../db/db.sync')

const userExists = async (email) => {
    try {
        const user = await Candidate.findOne({ where: { email } });
        if (!user) {
            return false
        }
        return true
    } catch (error) {
        throw new Error("Erro interno do servidor" + error.message)
    }
}

const createCandidate = async (user) => {
    try {
        const userCreated = await Candidate.create(user)
        return userCreated
    } catch (error) {
        throw new Error("Erro ao cadastrar o usuário" + error.message)
    }
}

module.exports = { userExists, createCandidate }