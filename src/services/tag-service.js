const httpStatus = require('http-status')
const prisma = require('../../prisma/client')

const getAllTag = async () => {
    const result = await prisma.tag.findMany()

    return result
}

const createTag = async (tagBody) => {
    const result = await prisma.tag.create({
        data: tagBody,
    })

    return result
}

module.exports = {
    getAllTag,
    createTag,
}