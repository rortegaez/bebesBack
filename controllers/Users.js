const Baby = require('../models/Baby')
const User = require('../models/User')

// obtenemos todos los user
const getAll = async (req, res) => {
  const result = await User.find()
  res.json(result)
}

// creamos lo user
const create = async (req, res) => {
  const newUser = new User(req.body)
  await newUser.save()

  res.json(newUser)
}

// buscamos el user por el id, y cuando se encuentra, buscamos los babys que tiene.
const getById = async (req, res) => {
  const result = await User.findById(req.params.id)
  if (!result) {
    return res.status(400).send('User not found')
  }
  // buscamos los babys por el id del parent
  const resultBaby = await Baby.find({ Parent: result._id })
  // con .toBject convertimos result en un objeto simple y lo metemos dentro userObject, el cual, luego se se añade resultBaby añadiento a userObject el .Babys
  const userObject = result.toObject()
  userObject.Babys = resultBaby
  res.json(userObject)
}

module.exports = { getAll, create, getById }
