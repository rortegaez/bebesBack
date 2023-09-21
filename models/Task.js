const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema({
  event: String,
  amount: Number,
  comment: String,
  namebaby: {
    type: Schema.Types.ObjectId,
    ref: 'Baby'
  }
})

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task
