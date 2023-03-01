const Sequence = require('mysql2/typings/mysql/lib/protocol/sequences/Sequence');
const Sequelize = require('sequelize');

// 1) Nombre base de datos
// 2) usuario base de datos
// 3) password base de datos
// 4) objeto de configuracion del ORM

const sequelize = new Sequelize('video-club',
'root', 'secret', {
    host:'127.0.0.1',
    dialect:'mysql'
});