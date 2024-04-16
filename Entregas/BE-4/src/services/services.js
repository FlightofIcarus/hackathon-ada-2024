const database = require('../../src/db/db.sync') //nome do database apenas de exemplo. Será alterado quando for criado o definitivo


async function getAllEmployees(db) {
    try {
        const [employees] = await db.query('SELECT * FROM employees');
        return employees;
    } catch (error) {
        throw new Error("Erro ao obter funcionários do banco de dados: " + error.message);
    }
}

async function getEmployeeById(db, employeeId) {
    try {
        const [employee] = await db.query('SELECT * FROM employees WHERE id = ?', [employeeId]);
        return employee[0] || null; // Retorna o funcionário encontrado ou null se nenhum for encontrado
    } catch (error) {
        throw new Error("Erro ao obter funcionário por ID do banco de dados: " + error.message);
    }
}



async function registerEmployee(db, employee) {
    try {
        const employeeData = await db.execute('INSERT INTO employees (name, email, department, employee_registration, gender, sexual_orientation, ethnicity, pwd) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [employee.name, employee.position, employee.department, employee.employee_registration, employee.gender, employee.sexual_orientation, employee.ethnicity, employee.pwd])
        return employeeData.insertId;       
    } catch (error) {
        throw new Error("Erro ao cadastrar o usuário" + error.message)
    }
}

async function updateEmployee(db, employeeId, employee) {
    try {
        const employeeData = await db.execute('UPDATE employees SET name = ?, email = ?, department = ?, employee_registration = ?, gender = ?, sexual_orientation = ?, ethnicity = ?, pwd = ? WHERE id = ?',
            [employee.name, employee.email, employee.department, employee.employee_registration, employee.gender, employee.sexual_orientation, employee.ethnicity, employee.pwd, employeeId]);
        return employeeData[0].affectedRows; // Assuming your execute function returns information about the affected rows
    } catch (error) {
        throw new Error("Error updating user data: " + error.message);
    }
}

async function deleteEmployee(db, employeeId) {
    try {
        const employeeData = await db.execute('DELETE FROM employees WHERE id = ?', [employeeId]);
        return employeeData[0].affectedRows; // Retorna o número de linhas afetadas pela exclusão
    } catch (error) {
        throw new Error("Erro ao excluir funcionário: " + error.message);
    }
}

async function analyzeUserData(Model, tableName) {
    try {
        const demographics = await Model.findAll({
            attributes: [
                [Model.sequelize.fn('COUNT', Model.sequelize.col('id')), 'total'],
                [Model.sequelize.fn('SUM', Model.sequelize.literal("CASE WHEN ethnicity = 'white' THEN 1 ELSE 0 END")), 'white_count'],
                [Model.sequelize.fn('SUM', Model.sequelize.literal("CASE WHEN ethnicity = 'black' THEN 1 ELSE 0 END")), 'black_count'],
                [Model.sequelize.fn('SUM', Model.sequelize.literal("CASE WHEN ethnicity = 'hispanic' THEN 1 ELSE 0 END")), 'hispanic_count'],
                [Model.sequelize.fn('SUM', Model.sequelize.literal("CASE WHEN ethnicity = 'asian' THEN 1 ELSE 0 END")), 'asian_count'],
                [Model.sequelize.fn('SUM', Model.sequelize.literal("CASE WHEN gender = 'male' THEN 1 ELSE 0 END")), 'male_count'],
                [Model.sequelize.fn('SUM', Model.sequelize.literal("CASE WHEN gender = 'female' THEN 1 ELSE 0 END")), 'female_count'],
                [Model.sequelize.fn('SUM', Model.sequelize.literal("CASE WHEN sexual_orientation = 'heterosexual' THEN 1 ELSE 0 END")), 'heterosexual_count'],
                [Model.sequelize.fn('SUM', Model.sequelize.literal("CASE WHEN sexual_orientation = 'homosexual' THEN 1 ELSE 0 END")), 'homosexual_count'],
                [Model.sequelize.fn('SUM', Model.sequelize.literal("CASE WHEN sexual_orientation = 'bisexual' THEN 1 ELSE 0 END")), 'bisexual_count'],
                [Model.sequelize.fn('SUM', Model.sequelize.literal("CASE WHEN sexual_orientation = 'other' THEN 1 ELSE 0 END")), 'other_count'],
                [Model.sequelize.fn('AVG', Model.sequelize.col('pwd')), 'pwd_percentage']
            ],
            where: {},
            tableName
        });

        if (demographics.length > 0) {
            const totalEntries = demographics[0].dataValues.total;
            const diversityPercentages = {
                ethnicity: {
                    white: Math.round((demographics[0].dataValues.white_count / totalEntries) * 100),
                    black: Math.round((demographics[0].dataValues.black_count / totalEntries) * 100),
                    hispanic: Math.round((demographics[0].dataValues.hispanic_count / totalEntries) * 100),
                    asian: Math.round((demographics[0].dataValues.asian_count / totalEntries) * 100)
                },
                gender: {
                    male: Math.round((demographics[0].dataValues.male_count / totalEntries) * 100),
                    female: Math.round((demographics[0].dataValues.female_count / totalEntries) * 100)
                },
                sexualOrientation: {
                    heterosexual: Math.round((demographics[0].dataValues.heterosexual_count / totalEntries) * 100),
                    homosexual: Math.round((demographics[0].dataValues.homosexual_count / totalEntries) * 100),
                    bisexual: Math.round((demographics[0].dataValues.bisexual_count / totalEntries) * 100),
                    other: Math.round((demographics[0].dataValues.other_count / totalEntries) * 100)
                },
                pwd: Math.round(demographics[0].dataValues.pwd_percentage)
            };

            return {
                status: 200,
                totalEntries,
                diversityPercentages
            };
        } else {
            return {
                status: 404,
                message: `Dados não encontrados para a tabela ${tableName}`
            };
        }
    } catch (error) {
        if (error instanceof Sequelize.ValidationError) {
            return {
                status: 400,
                message: `Requisição inválida: ${error.message}`
            };
        } else if (error instanceof Sequelize.AuthorizationError) {
            return {
                status: 401,
                message: "Não autorizado - falha na autenticação"
            };
        } else if (error instanceof Sequelize.ForbiddenError) {
            return {
                status: 403,
                message: "Proibido - falta de permissão"
            };
        } else {
            return {
                status: 500,
                message: "Erro interno do servidor. Por favor, tente novamente mais tarde."
            };
        }
    }
}

module.exports = {
    getAllEmployees,
    getEmployeeById,
    registerEmployee,
    updateEmployee,
    deleteEmployee,
    analyzeUserData,
}