const express = require('express')
const router = express.Router()
const authRouter = require('./auth-route')
const taskRouter = require('./task-route')
const tagRouter = require('./tag-route')

const defaultRoutes = [
    {
        path: '/auth',
        route: authRouter
    },
    {
        path: '/tasks',
        route: taskRouter
    },
    {
        path: '/tags',
        route: tagRouter
    }
]

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router