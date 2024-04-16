module.exports = (sequelize,DataTypes,Employee) => {

    const HumanResource = sequelize.define('HumanResource',{
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            unique: true,
            autoIncrement : true,
            allowNull : false
        },
    
        employee_id : {
            type : DataTypes.INTEGER,
            references : {
                model : Employee,
                key: 'id'
                }
        },
    
        employee_registration : {
            type: DataTypes.INTEGER
        }
    },{tableName: 'human_resources',timestamps : false});

    return HumanResource;
}

