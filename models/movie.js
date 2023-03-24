module.exports = (sequelize, type) => {
    const Movie = sequelize.define('movies', {
        id: {type: type.INTEGER, primarykey:true, autoIncrement:true },
        title: type.STRING
    });
    return Movie;
};