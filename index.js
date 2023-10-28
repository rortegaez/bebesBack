const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = require('./routes')

require('dotenv').config()

// conectamos con mongo
mongoose
  . connect(`mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.2tjxv97.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => {
    console.log('Connected to Mongo')
  }).catch((err) => {
    console.log(err)
  })

// esto aplica a toda la aplicación
/* const simpleMiddleware = (req, res, next) => {
  console.log('Hola soy el middlewarew')
  next()
} */

// app.use(simpleMiddleware)

app.use(express.json()) // para poder procesar los json
app.use(router) // para usar las route

// cuando nos conecta al puerto 3000, no slo confirma que esta todo ok
app.listen(3000, () => {
  console.log('App is listening on port 3000')
})
