const Task = require('../models/Task')

// vemos todas las task
const getAll = async (req, res) => {
  const result = await Task.find()
  res.json(result)
}

// creamos un task
const createTask = async (req, res) => {
  const newTask = new Task(req.body)
  await newTask.save()
  res.json(newTask)
}

module.exports = { getAll, createTask }
