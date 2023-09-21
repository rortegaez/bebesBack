const express = require('express')
const router = express.Router()
const userRouter = require('./userRoutes')
const babyRouter = require('./babyRoutes')
const taskRouter = require('./taskRoutes')

router.use('/user', userRouter)
router.use('/baby', babyRouter)
router.use('/task', taskRouter)

module.exports = router
