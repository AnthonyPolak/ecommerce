const { DataTypes } = require('sequelize')
const db = require('../database/Db')
  

const IndividualPerson = db.sequelize.define('Clients', {
  name: {
      type: DataTypes.STRING
  },
  email: {
      type: DataTypes.STRING
  },
  birthday: {
      type: DataTypes.STRING
  },
  ssn: {
      type: DataTypes.STRING
  },
  password: {
      type: DataTypes.STRING
  }
});

//IndividualPerson.sync({force: true})
module.exports = IndividualPerson
