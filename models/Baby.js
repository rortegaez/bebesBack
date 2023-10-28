// aquí tenemos el esquema de como debe de ser el elamento baby

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BabySchema = new Schema({
  name: String,
  Birthday: Date,
  Weight: Number,
  Tall: Number,
  // esto es para hacer luego el populate y que nos aparezca el user, para saber a quien corresponde cada bebe
  Parent: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

const Baby = mongoose.model('Baby', BabySchema)

module.exports = Baby
