const express = require('express')
const router = express.Router()
const userController = require('../controllers/Users')
const { validate } = require('../middlewares/validationMiddle')
const { userSchema } = require('../middlewares/schemas/validateSchema')

const myIdCheker = (req, res, next) => {
  console.log('hola soy el middleware myidchecker', req.params.id)
  if (req.params.id) next()
  res.status(400).send('por favor especifica un id')
}

router.get('/', userController.getAll)
router.get('/:id', myIdCheker, userController.getById)

router.post('/', validate(userSchema), userController.create)

module.exports = router
