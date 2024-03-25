const express = require('express')
const router = express.Router()
const taskController = require('../../controllers/task-controller')

router.route('/').get(taskController.getAllTask).post(taskController.createTask)

module.exports = router