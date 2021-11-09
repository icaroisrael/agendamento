const Sequelize = require('sequelize')
const sequelize = new Sequelize('agendamento','root','',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize,
    sequelize
}