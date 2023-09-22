const express = require('express')
const router = express.Router()
const babyController = require('../controllers/Babys')

const { validate } = require('../middlewares/validationMiddle')
const { babySchema } = require('../middlewares/schemas/validateSchema')

router.get('/:id', babyController.getById)

router.post('/', validate(babySchema), babyController.create)

module.exports = router
