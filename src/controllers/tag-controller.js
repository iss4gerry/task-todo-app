const httpStatus = require('http-status')
const { tagService } = require('../services/index')
const catchAsync = require('../utils/catchAsync')

const getAllTag = catchAsync(async(req, res) => {
    const result = await tagService.getAllTag()

    res.status(httpStatus.OK).send({
        status: httpStatus.OK,
        message: 'Get all tag success!',
        data: result
    })
})

const createTag = catchAsync(async(req, res) => {
    const result = await tagService.createTag(req.body)

    res.status(httpStatus.CREATED).send({
        status: httpStatus.OK,
        message: 'Create tag success!',
        data: result
    })
})

module.exports = { 
    getAllTag,
    createTag
}