const express = require('express')
const router = express.Router()
const babyController = require('../controllers/Babys')

router.get('/:id', babyController.getById)

router.post('/', babyController.create)

module.exports = router
