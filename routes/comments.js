const express = require ('express');
const commentController = require('../controller/commentController');
const router = express.Router();

router.use(express.json());
router.post('/comments', commentController.createComment);
router.put('/comments', commentController.updateComment);
router.delete('/comments', commentController.deleteComment);

module.exports = router;