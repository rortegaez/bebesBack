const express = require('express')
const router = express.Router()
const userController = require('../controllers/Users')

router.get('/', userController.getAll)
router.get('/:id', userController.getById)

router.post('/', userController.create)

module.exports = router
