// esquema de validación del elemento task
const Joi = require('joi')

const taskSchema = Joi.object()
  .keys({
    event: Joi.string().required(),
    amount: Joi.number(),
    comment: Joi.string(),
    namebaby: Joi.string().required()
  })

module.exports = { taskSchema }
