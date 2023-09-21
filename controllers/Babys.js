const Baby = require('../models/Baby')
const Task = require('../models/Task')

const create = async (req, res) => {
  const newBaby = new Baby(req.body)
  await newBaby.save()

  res.json(newBaby)
}

const getById = async (req, res) => {
  const result = await Baby.findById(req.params.id).populate('Parent')
  const resultTask = await Task.find({ namebaby: result._id })
  const userObject = result.toObject()
  userObject.Tasks = resultTask
  res.json(userObject)
}

module.exports = { getById, create }
