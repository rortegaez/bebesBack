const express = require('express')
const router = express.Router()
const taskController = require('../controllers/Tasks')
const { validate } = require('../middlewares/validationMiddle')
const { taskSchema } = require('../middlewares/schemas/validateSchema')

router.get('/', taskController.getAll)

router.post('/', validate(taskSchema), taskController.createTask)

module.exports = router
