const httpStatus = require('http-status')
const prisma = require('../../prisma/client')
const ApiError = require('../utils/ApiError')

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

const findTagById = async (tagId) => {
    const result = await prisma.tag.findFirst({
        where: { id: tagId }
    })

    if(!result){
        throw new ApiError(httpStatus.BAD_REQUEST, 'Tag not found')
    }

    return result
}

const deleteTag = async (tagId) => {
    await findTagById(tagId)
    const result = await prisma.tag.delete({
        where: { id: tagId }
    })

    return result
}

const updateTag = async (tagBody, tagId) => {
    await findTagById(tagId)
    const result = await prisma.tag.update({
        where: { id: tagId },
        data: tagBody
    })
    return result 
}

module.exports = {
    getAllTag,
    createTag,
    findTagById,
    deleteTag,
    updateTag
}