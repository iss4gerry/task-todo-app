const bcrypt = require('bcrypt')
const prisma = require('../../prisma/client')

const createUser = async (userBody) => {
    userBody.password = bcrypt.hashSync(userBody.password, 8)
    return prisma.user.create({
        data: userBody
    })
}

const getUserByEmail = async (email) => {
    return prisma.user.findUnique({
        where: { email }
    })
}

module.exports = {
    createUser,
    getUserByEmail
}