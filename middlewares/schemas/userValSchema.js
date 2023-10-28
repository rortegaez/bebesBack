// esquema de validación del elemento user
const Joi = require('joi')

const userSchema = Joi.object()
  .keys({
    name: Joi.string().required(),
    email: Joi.string().required()
  })

module.exports = { userSchema }
