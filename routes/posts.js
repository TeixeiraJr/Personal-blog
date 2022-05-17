const express = require ('express');
const postController = require('../controller/postController');
const router = express.Router();

router.use(express.json());
router.get('/posts', postController.createPost)

module.exports = router