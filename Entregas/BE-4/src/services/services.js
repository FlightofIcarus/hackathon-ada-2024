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

async function analyzeUserData(db, table) {
    try {
        const [result] = await db.query(`
            SELECT
                COUNT(*) AS total,
                SUM(CASE WHEN ethnicity = 'white' THEN 1 ELSE 0 END) AS white_count,
                SUM(CASE WHEN ethnicity = 'black' THEN 1 ELSE 0 END) AS black_count,
                SUM(CASE WHEN ethnicity = 'hispanic' THEN 1 ELSE 0 END) AS hispanic_count,
                SUM(CASE WHEN ethnicity = 'asian' THEN 1 ELSE 0 END) AS asian_count,
                SUM(CASE WHEN gender = 'male' THEN 1 ELSE 0 END) AS male_count,
                SUM(CASE WHEN gender = 'female' THEN 1 ELSE 0 END) AS female_count,
                SUM(CASE WHEN sexual_orientation = 'heterosexual' THEN 1 ELSE 0 END) AS heterosexual_count,
                SUM(CASE WHEN sexual_orientation = 'homosexual' THEN 1 ELSE 0 END) AS homosexual_count,
                SUM(CASE WHEN sexual_orientation = 'bisexual' THEN 1 ELSE 0 END) AS bisexual_count,
                SUM(CASE WHEN sexual_orientation = 'other' THEN 1 ELSE 0 END) AS other_count,
                AVG(pwd) * 100 AS pwd_percentage
            FROM 
                ${table}
        `);

        if (result.length > 0) {
            return {
                totalEntries: result[0].total,
                diversityPercentages: {
                    ethnicity: {
                        white: Math.round((result[0].white_count / result[0].total) * 100),
                        black: Math.round((result[0].black_count / result[0].total) * 100),
                        hispanic: Math.round((result[0].hispanic_count / result[0].total) * 100),
                        asian: Math.round((result[0].asian_count / result[0].total) * 100)
                    },
                    gender: {
                        male: Math.round((result[0].male_count / result[0].total) * 100),
                        female: Math.round((result[0].female_count / result[0].total) * 100)
                    },
                    sexualOrientation: {
                        heterosexual: Math.round((result[0].heterosexual_count / result[0].total) * 100),
                        homosexual: Math.round((result[0].homosexual_count / result[0].total) * 100),
                        bisexual: Math.round((result[0].bisexual_count / result[0].total) * 100),
                        other: Math.round((result[0].other_count / result[0].total) * 100)
                    },
                    pwd: Math.round(result[0].pwd_percentage)
                }
            };
        } else {
            throw new Error(`Não foi possível obter os dados de análise para a tabela ${table}.`);
        }
    } catch (error) {
        throw new Error(`Erro ao analisar dados da tabela ${table}: ${error.message}`);
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