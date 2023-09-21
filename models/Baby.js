const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BabySchema = new Schema({
  name: String,
  Birthday: Date,
  Weight: Number,
  Tall: Number,
  Parent: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

const Baby = mongoose.model('Baby', BabySchema)

module.exports = Baby
