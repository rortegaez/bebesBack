const express = require('express')
const router = express.Router()

// debemos de requerir el controlador y los middlewares
const userController = require('../controllers/Users')
const { validate } = require('../middlewares/validationMiddle')
const { userSchema } = require('../middlewares/schemas/userValSchema')

// es un middleware de prueba, ahora no funciona, se debe de arreglar
/* {const myIdCheker = (req, res, next) => {
  console.log('hola soy el middleware myidchecker', req.params.id)
  if (req.params.id) next()
  res.status(400).send('por favor especifica un id')
}}> */

// para ver todos los user
router.get('/', userController.getAll)

// busca un user por su id
router.get('/:id', /* myIdCheker,  */userController.getById)

// para crear baby y en medio ponemos el middlewares validate, con su parámetro userSchema
router.post('/', validate(userSchema), userController.create)

module.exports = router
