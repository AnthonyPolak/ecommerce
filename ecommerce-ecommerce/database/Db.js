const Sequelize = require('sequelize');
//const connection = require('../config/config')

const sequelize = new Sequelize('ecommerce', 'root', '',{
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = {
  Sequelize: sequelize,
  sequelize: sequelize
}