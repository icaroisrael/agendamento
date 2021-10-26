const Sequelize = require('sequelize')
const sequelize = new Sequelize('agendamento', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
})
module.exports = {
    Sequelize,
    sequelize
}