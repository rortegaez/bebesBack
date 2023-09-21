const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = require('./routes')

require('dotenv').config()

mongoose
  . connect(`mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.2tjxv97.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => {
    console.log('Connected to Mongo')
  }).catch((err) => {
    console.log(err)
  })

app.use(express.json())
app.use(router)

app.listen(3000, () => {
  console.log('App is listening on port 3000')
})