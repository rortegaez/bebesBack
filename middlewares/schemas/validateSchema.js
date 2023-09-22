const Joi = require('joi')

const userSchema = Joi.object()
  .keys({
    name: Joi.string().required(),
    email: Joi.string().required()
  })

const babySchema = Joi.object()
  .keys({
    name: Joi.string().required(),
    Birthday: Joi.date().max(Date.now()).required(),
    Weight: Joi.number().required(),
    Tall: Joi.number().required(),
    Parent: Joi.string().required()
  })

const taskSchema = Joi.object()
  .keys({
    event: Joi.string().required(),
    amount: Joi.number(),
    comment: Joi.string(),
    namebaby: Joi.string().required()
  })

module.exports = { userSchema, babySchema, taskSchema }
