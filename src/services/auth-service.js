const httpStatus = require('http-status')
const bcrypt = require('bcrypt')
const ApiError = require("../utils/ApiError")
const userService = require('./user-service')

const userLogin = async (email, password) => {
    const user = await userService.getUserByEmail(email)
  if (!user) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect email or password');
  }
  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect email or password');
  }
  return user;
}


module.exports = { userLogin }
