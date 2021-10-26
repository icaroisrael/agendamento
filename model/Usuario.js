const db = require('../config/db')
const Usuario = db.sequelize.define('usuario', {
    cpf:{
        type: db.Sequelize.INTEGER(11),       
        autoIncrement: false,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: db.Sequelize.STRING(50),
        allowNull: false,
    }
}) 
//Usuario.sync({force:true})
module.exports = Usuario;