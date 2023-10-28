// aquí tenemos la validación para la creación de babys

const Joi = require('joi')

const babySchema = Joi.object()
  .keys({
    name: Joi.string().required(),
    // aquí además de decir que debe de ser una fecha, además estamos indicando que no puede ser superior a la fecha actual
    Birthday: Joi.date().max(Date.now()).required(),
    Weight: Joi.number().required(),
    Tall: Joi.number().required(),
    Parent: Joi.string().required()
  })

module.exports = { babySchema }
