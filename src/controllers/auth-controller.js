const httpStatus = require('http-status')
const ApiError = require('../utils/ApiError')
const catchAsync = require('../utils/catchAsync')
const { userService, authService } = require('../services/index')

const register = catchAsync(async (req, res) => {
    const existingUser = await userService.getUserByEmail(req.body.email)
    if(existingUser){
        throw new ApiError(httpStatus.BAD_REQUEST, 'Email already Taken')
    }

    const userCreated = await userService.createUser(req.body)
    res.status(httpStatus.CREATED).send({userCreated})
})

const login = catchAsync(async (req, res) => {
    const { email, password } = req.body
    const user = await authService.userLogin(email, password)
    res.status(httpStatus.OK).send({user})
})
module.exports = { 
    register,
    login
}