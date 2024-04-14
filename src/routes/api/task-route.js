const express = require('express')
const router = express.Router()
const taskController = require('../../controllers/task-controller')

router.route('/').get(taskController.getAllTask).post(taskController.createTask)

router
  .route('/:taskId')
  .get(taskController.getTaskById)
  .delete(taskController.deleteTask)
  .patch(taskController.updateTask)

module.exports = router