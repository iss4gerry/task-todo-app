const express = require('express')
const app = express()
const router = require('./routes/api/index')
const path = require('path')

const publicPath = path.join(__dirname, 'public')
app.use(express.static(publicPath))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('./views')
})

app.use('/api', router)

module.exports = app