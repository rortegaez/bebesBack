const express = require('express')
const router = express.Router()

// debemos de requerir el controlador y los middlewares
const taskController = require('../controllers/Tasks')
const { validate } = require('../middlewares/validationMiddle')
const { taskSchema } = require('../middlewares/schemas/taskValSchema')

// para obtener todas las task
router.get('/', taskController.getAll)

// para crear baby y en medio ponemos el middlewares validate, con su parámetro taskSchema
router.post('/', validate(taskSchema), taskController.createTask)

module.exports = router
