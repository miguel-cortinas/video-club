const Director = 



module.exports = (sequelize, type)=>{
    const Director = sequelize.define('directors', {
        id: {type: type.INTEGER, primarykey:true, autoIncrement:true},
        name: type.STRING,
        lastName: type.STRING,
    });
};