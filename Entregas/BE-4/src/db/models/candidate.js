module.exports = (sequelize,DataTypes,User) => {
    const Candidate = sequelize.define('Candidate',{
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            unique: true,
            autoIncrement : true,
            allowNull : false
        },
        
        user_id : {
            type : DataTypes.INTEGER,
            references : {
                model : User,
                key: 'id'
            }
        },
    
        objective : {
            type: DataTypes.STRING
        },
    
        summary : {
            type: DataTypes.STRING
        },
    
    },{tableName : 'candidates',timestamps : false});
    
    return Candidate;
}