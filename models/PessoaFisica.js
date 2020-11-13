const db = require('../DB/DB');

const pessoaFisica = db.sequelize.define('PF',{
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    nascimento: {
        type: db.Sequelize.STRING
    },
    cpf: {
        type: db.Sequelize.STRING
    },
    senha: {
        type: db.Sequelize.NUMBER
    }
});

module.exports = pessoaFisica;