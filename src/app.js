const express = require('express')
const app = express()
const router = require('./routes/api/index')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/api', router)

module.exports = app