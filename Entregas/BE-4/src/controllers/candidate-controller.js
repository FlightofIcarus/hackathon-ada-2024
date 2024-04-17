const service = require('../services/candidate-services')
const bcrypt = require('bcrypt')

const createCandidate = async (req, res) => {
    let userData = req.body
    try {
        if (await service.userExists(userData.email)) {
            return res.status(400).json({ message: 'E-mail já utilizado' })
        };

        const { password, ...newUser } = userData
        const hashedPassword = await bcrypt.hash(password, 10);
        newUser.password = hashedPassword

        const userCreated = await service.createCandidate
        return res.status(201).json({ message: 'Usuario criado', userCreated })
    } catch (error) {
        throw new Error("Erro ao cadastrar o usuário" + error.message)
    }
}

module.exports = { createCandidate }