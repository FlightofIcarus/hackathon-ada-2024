const { Candidate } = require('../db/db.sync')
const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ message: 'Autenticação falhou' });
    };
    const token = authorization.split(" ")[1];

    try {
        const decodedToken = jwt.decode(token, process.env.JWT_SECRET);
        if (!decodedToken) {
            return res.status(401).json({ message: 'Autenticação falhou' });
        };

        const candidateFromToken = await Candidate.findOne({ where: { id: decodedToken.id } });
        if (!candidateFromToken) {
            return res.status(403).json({ message: 'Permissão negada' });
        };

        const { id, name, email } = candidateFromToken.dataValues;

        req.user = { id, name, email };

        next();
    } catch (error) {
        return res.status(500).json({ erro: error.message })
    }
}
module.exports = auth