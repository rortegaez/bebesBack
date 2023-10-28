// aquí tenemos el esquema de como debe de ser el elamento task

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema({
  event: String,
  amount: Number,
  comment: String,
  // para que cuando hagamos una busqueda, nos aparezca a que babys le pertenece
  namebaby: {
    type: Schema.Types.ObjectId,
    ref: 'Baby'
  }
})

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task
