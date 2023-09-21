const Task = require('../models/Task')

const getAll = async (req, res) => {
  const result = await Task.find()
  res.json(result)
}

const createTask = async (req, res) => {
  console.log('inicio')
  const newTask = new Task(req.body)
  await newTask.save()
  res.json(newTask)
}

module.exports = { getAll, createTask }
