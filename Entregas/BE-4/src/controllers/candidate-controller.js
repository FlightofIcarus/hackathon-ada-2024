const service = require('../services/candidate-services')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { where } = require('sequelize')

const createCandidate = async (req, res) => {
    let userData = req.body
    try {
        if (await service.userExists(userData.email)) {
            return res.status(400).json({ message: 'E-mail já utilizado' })
        };

        const { password, ...newUser } = userData
        const hashedPassword = await bcrypt.hash(password, 10);
        newUser.password = hashedPassword

        const userCreated = await service.createCandidate(newUser)
        return res.status(201).json({ message: 'Usuario criado', userCreated })
    } catch (error) {
        throw new Error("Erro ao cadastrar o usuário" + error.message)
    }
}

const loginCandidate = async (req, res) => {
    const { email, password } = req.body
    try {
        const candidate = service.findCandidate(email)
        if (candidate === false) {
            return res.status(404).json({ message: 'Usuario não localizado' })
        }
        if (!(await bcrypt.compare(password, candidate.password))) {
            return res.status(400).json({ message: 'Senha inválida' })
        }
        const token = jwt.sign({
            id: candidate.id,
            name: candidate.name,
            email: candidate.email
        }, process.env.JWT_SECRET, { expiresIn: '2h' })

        return res.status(200).json({ message: 'Login realizado', token })
    } catch (error) {
        throw new Error("Erro ao logar o usuário" + error.message)
    }
}

const getOneCandidate = async (req, res) => {
    const candidate = req.user
    return res.status(200).json(candidate)
}

const updateCandidate = async (req, res) => {
    const { id, email } = req.user
    try {
        const candidate = service.findCandidate(email)
        if (candidate === false) {
            return res.status(404).json({ message: 'Usuario não localizado' })
        }

        await service.updateCandidate(id, req.body)
        res.status(200).json({ message: 'Candidato atualizado' })
    } catch (error) {
        return res.status(500).json({ erro: error.message })
    }
}

app.put("/:id", async (request, response) => {
    const filter = {
        where: { id: request.params.id },
        returning: true
    };
    const [task, _] = await Task.update(request.body, filter);
    if (!task) return response.status(404).end("Tarefa não encontrada.");

    response.json(task);
});
module.exports = { createCandidate, loginCandidate, getOneCandidate, updateCandidate }