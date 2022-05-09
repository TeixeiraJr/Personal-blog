const express = require ('express');
const router = express.Router();

router.get('/posts', (req, res) => {
    res.json({
        title: 'my first posts',
        content: 'my first content',
        author: 'Teixeira Junior'
    });
})

module.exports = router