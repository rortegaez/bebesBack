const express = require('express')
const router = express.Router()
const taskController = require('../controllers/Tasks')

router.get('/', taskController.getAll)

router.post('/', taskController.createTask)

module.exports = router
