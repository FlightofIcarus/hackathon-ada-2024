const db = require('../db/db.sync')//('../db/db.sync')
const service = require('../services/employee-services')

const getAllEmployees = async (req, res) => {
    try {
        const employees = await service.getAllEmployees(db);
        res.status(200).json(employees);
    } catch (error) {
        console.error("Erro ao obter funcionários:", error);
        res.status(500).json({ error: "Erro interno de servidor" });
    }
}

const getEmployeeById = async (req, res) => {
    try {
        const employeeId = req.params.id;
        const employee = await service.getEmployeeById(db, employeeId);

        if (employee) {
            res.status(200).json(employee);
        } else {
            res.status(404).json({ error: "Funcionário não encontrado" });
        }
    } catch (error) {
        console.error("Erro ao obter funcionário por ID:", error);
        res.status(500).json({ error: "Erro interno de servidor" });
    }
}

const registerEmployee = async (req, res) => {
    try {
        const employee = req.body;
        const employeeData = await service.registerEmployees(db, employee);
        res.status(200).json({ message: "Funcionário cadastrado com sucesso", employeeData });
    } catch (error) {
        res.status(500).json({ error: "Erro interno de servidor" });
    }
}

const updateEmployee = async (req, res) => {
    try {
        const employeeId = req.params.id;
        const employee = req.body;
        const updatedEmployeeId = await service.updateEmployee(db, employeeId, employee);
        res.status(200).json({ message: "Funcionário atualizado com sucesso", employeeId: updatedEmployeeId });
    } catch (error) {
        console.error("Erro ao atualizar funcionário:", error);
        res.status(500).json({ error: "Erro interno de servidor" });
    }
}

const deleteEmployee = async (req, res) => {
    try {
        const employeeId = req.params.id;
        const affectedRows = await service.deleteEmployee(db, employeeId);

        if (affectedRows > 0) {
            res.status(200).json({ message: "Funcionário excluído com sucesso" });
        } else {
            res.status(404).json({ error: "Funcionário não encontrado" });
        }
    } catch (error) {
        console.error("Erro ao excluir funcionário:", error);
        res.status(500).json({ error: "Erro interno de servidor" });
    }
}

module.exports = {
    getAllEmployees,
    getEmployeeById,
    registerEmployee,
    updateEmployee,
    deleteEmployee,
}