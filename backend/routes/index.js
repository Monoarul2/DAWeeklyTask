const express = require('express')
const { studentRouter } = require('./student.route')

const router = express.Router()

router.use('/tasks', studentRouter)

module.exports = {
	router
}