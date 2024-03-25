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

module.exports = {
    getAllTask,
    createTask,
}