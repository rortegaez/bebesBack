const express = require('express')
const router = express.Router()

// debemos de requerir el controlador y los middlewares
const babyController = require('../controllers/Babys')
const { validate } = require('../middlewares/validationMiddle')
const { babySchema } = require('../middlewares/schemas/babyValSchema')

// para obtener el baby por el id
router.get('/:id', babyController.getById)

// para crear baby y en medio ponemos el middlewares validate, con su parámetro babySchema
router.post('/', validate(babySchema), babyController.create)

module.exports = router
