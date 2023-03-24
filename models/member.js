module.exports = (sequelize, type) => {
    const Member = sequelize.define('members', {
        id: {type: type.INTEGER, primarykey:true, autoIncrement:true },
        name: type.STRING,
        lastName: type.STRING,
        address: type.STRING,
        phone: type.INTEGER,
        status: type.BOOLEAN
    });
    return Member;
};