const Sequelize = require("sequelize");
const UserModel = require("./models/user");
const CandidateModel = require("./models/candidate");
const EmployeeModel = require('./models/employee');
const HumanResourceModel = require("./models/human_resource");
const JobModel = require("./models/job");
const ApplicationModel = require("./models/application");
const AddressModel = require("./models/address");
const dbConfig = require("./db.config");

const mysql = require('mysql2/promise');

mysql.createConnection({
  user: dbConfig.USER,
  password: dbConfig.PASSWORD
}).then((connection) => {
  connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbConfig.DB}\`;`)
    .then(()=>{console.log("Database criado com sucesso")});
}).catch((err) => {
  console.error("Erro ao criar database:", err);
});

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: "mysql",
  
});

const User = UserModel(sequelize, Sequelize.DataTypes);

const Candidate = CandidateModel(sequelize, Sequelize.DataTypes, User);

const Employee = EmployeeModel(sequelize,Sequelize.DataTypes,User);

const HumanResource = HumanResourceModel(sequelize,Sequelize.DataTypes,User);

const Job = JobModel(sequelize, Sequelize.DataTypes,HumanResource);

const Application = ApplicationModel(sequelize, Sequelize.DataTypes,Job,Candidate);

const Address = AddressModel(sequelize, Sequelize.DataTypes,Candidate);

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Todas as tabelas foram sincronizadas com sucesso.");
  })
  .catch((err) => {
    console.error("Erro ao sincronizar tabelas:", err);
  });

module.exports = { User, Candidate, HumanResource, Job, Application, Address, Employee};
