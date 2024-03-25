const httpStatus = require('http-status')
const prisma = require('../../prisma/client')

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


module.exports = { 
    getAllTask,
    createTask
}