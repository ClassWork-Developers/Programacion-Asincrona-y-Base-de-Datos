const { Schema, model } = require('mongoose')

const usuarios = new Schema({
  nombre: String,
  apellido: String,
  password: {
    type: String,
    default: 'password'
  }
})

const userEstructura = model('User', usuarios)

module.exports = userEstructura