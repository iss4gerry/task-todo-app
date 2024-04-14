const httpStatus = require('http-status')
const prisma = require('../../prisma/client')
const ApiError = require('../utils/ApiError')

const getAllTask = async () => {
    const result = await prisma.task.findMany()
    return result
}

const createTask = async (taskBody) => {
    const result = await prisma.task.create({
        data: taskBody
    })

    return result
}

const getTaskById = async (taskId) => {
    const result = await prisma.task.findFirst({
        where: { id: taskId }
    })

    if(!result){
        throw new ApiError(httpStatus.BAD_REQUEST, 'Task not found!')
    }

    return result
}

const deleteTask = async (taskId) => {
    await getTaskById(taskId)
    const result = await prisma.task.delete({
        where: { id: taskId }
    })

    return result
}

const updateTask = async (taskId, taskBody) => {
    await getTaskById
    const result = await prisma.task.update({
        where : { id: taskId },
        data: taskBody
    })

    return result
}

module.exports = { 
    getAllTask,
    createTask,
    getTaskById,
    deleteTask,
    updateTask
}