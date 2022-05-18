const express = require ('express');
const postController = require('../controller/postController');
const router = express.Router();

router.use(express.json());
router.post('/posts', postController.createPost);
router.put('/posts', postController.updatePost);

module.exports = router