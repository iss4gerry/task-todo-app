const httpStatus = require('http-status')
const catchAsync = require("../utils/catchAsync");
const { taskService } = require('../services');

const getAllTask = catchAsync(async(req, res) => {
    const result = await taskService.getAllTask()

    res.status(httpStatus.OK).send({
        status: httpStatus.OK,
        message: 'Get all task success!',
        data: result
    })
})  

const createTask = catchAsync(async(req, res) => {
    const result = await taskService.createTask(req.body)

    res.status(httpStatus.CREATED).send({
        status: httpStatus.CREATED,
        message: 'Create task success!',
        data: result
    })
})

const getTaskById = catchAsync(async(req, res) => {
    const result = await taskService.getTaskById(req.params.id)

    res.status(httpStatus.OK).send({
        status: httpStatus.CREATED,
        message: 'Get task success!',
        data: result
    })
})

const deleteTask = catchAsync(async(req, res) => {
    const result = await taskService.deleteTask(req.params.taskId)

    res.status(httpStatus.OK).send({
        status: httpStatus.CREATED,
        message: 'Delete task success!',
        data: result
    })
})

const updateTask = catchAsync(async(req, res) => {
    const result = await taskService.updateTask(req.params.taskId, req.body)

    res.status(httpStatus.OK).send({
        status: httpStatus.CREATED,
        message: 'Update task success!',
        data: result
    })
})

module.exports = {
    getAllTask,
    createTask,
    deleteTask,
    updateTask,
    getTaskById
}