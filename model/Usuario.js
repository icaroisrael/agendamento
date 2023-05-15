const db = require('../config/db')
const Usuario = db.sequelize.define('usuario',{
    cpf:{
        type: db.Sequelize.INTEGER(11),
        primaryKey: true,
        allowNull:false
    },
    nome:{
    type: db.Sequelize.STRING(50),
    allowNull:false
    },
    email:{
        type: db.Sequelize.STRING(100),
        allowNull: false
    },
    senha:{
        type: db.Sequelize.STRING(8),
        allowNull: false
    },
})

//Usuario.sync({force:true})

module.exports = Usuario;