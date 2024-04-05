const express = require('express')
const router = express.Router()
const tagController = require('../../controllers/tag-controller')

router.route('/').get(tagController.getAllTag).post(tagController.createTag)

router.route('/:tagId').get(tagController.findTagById).patch(tagController.updateTag).delete(tagController.deleteTag)

module.exports = router