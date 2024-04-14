const bcrypt = require('bcrypt')
const prisma = require('../../prisma/client')

const createUser = async (userBody) => {
    userBody.password = bcrypt.hashSync(userBody.password, 8)
    return await prisma.user.create({
        data: userBody
    })
}

const getUserByEmail = async (email) => {
    return await prisma.user.findUnique({
        where: { email }
    })
}

const getAllUsers = async () => {
    return await prisma.user.findMany()
}

module.exports = {
    createUser,
    getUserByEmail,
    getAllUsers
}