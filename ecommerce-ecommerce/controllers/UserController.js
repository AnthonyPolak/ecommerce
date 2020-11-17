const IndividualPerson = require('../models/IndividualPerson');
const bcrypt = require('bcryptjs')

module.exports = {
  async index (req, res) {
    res.render('pessoa_fisica')
  },

  async add (req, res) {
    const person = {
      name: req.body.name,
      email: req.body.email,
      birthday: req.body.birthday,
      ssn: req.body.ssn,
      password: req.body.password
    };

    await bcrypt.genSalt(10, (err, salt) =>{
          bcrypt.hash(person.password, salt, (err, hash) => {
              if(err){
                  req.flash("error_msg", "An error ocurred " + err.message);
                  res.redirect('/cadastro/PF')
              }

              person.password = hash;

              IndividualPerson.create(person).then(() =>{
                  req.flash("success_msg", "Usuário cadastrado com sucesso!");
                  res.redirect('/login');
              }).catch((err) =>{
                  req.flash("error_msg", "An error ocurred " + err.message);
                  res.redirect('/cadastro/PF')
              })
          })
      })
  }
}