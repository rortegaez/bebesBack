const Baby = require('../models/Baby')
const Task = require('../models/Task')

// creamos los bays
const create = async (req, res) => {
  const newBaby = new Baby(req.body)
  await newBaby.save()

  res.json(newBaby)
}

// buscamos los babys por su id y cuando se encuentras, se buscan sis task
const getById = async (req, res) => {
  // con el populate, hacemos que se vean los datos de parents
  const result = await Baby.findById(req.params.id).populate('Parent')
  // buscamos las task de cada baby, a traves de namebaby: result._id
  const resultTask = await Task.find({ namebaby: result._id })
  // con .toBject convertimos result en un objeto simple y lo metemos dentro userObject, el cual, luego se se añade resultTask añadiento a userObject el .Task
  const userObject = result.toObject()
  userObject.Tasks = resultTask
  res.json(userObject)
}

module.exports = { getById, create }
