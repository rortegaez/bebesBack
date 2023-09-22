const Joi = require('joi')

const babySchema = Joi.object()
  .keys({
    name: Joi.string().required(),
    Birthday: Joi.date().max(Date.now()).required(),
    Weight: Joi.number().required(),
    Tall: Joi.number().required(),
    Parent: Joi.string().required()
  })

module.exports = { babySchema }
