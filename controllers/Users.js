const Baby = require('../models/Baby')
const User = require('../models/User')

const getAll = async (req, res) => {
  const result = await User.find()
  res.json(result)
}

const create = async (req, res) => {
  const newUser = new User(req.body)
  await newUser.save()

  res.json(newUser)
}

const getById = async (req, res) => {
  const result = await User.findById(req.params.id)
  if (!result) {
    return res.status(400).send('User not found')
  }
  const resultBaby = await Baby.find({ Parent: result._id })
  const userObject = result.toObject()
  userObject.Babys = resultBaby
  res.json(userObject)
}

module.exports = { getAll, create, getById }
