const express = require('express')
const router = express.Router()
const tagController = require('../../controllers/tag-controller')

router.route('/').get(tagController.getAllTag).post(tagController.createTag)

module.exports = router