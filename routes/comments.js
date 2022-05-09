const express = require ('express');
const router = express.Router();

router.get('/comments/:postid', (req, res) => {
    res.json({
        content: `good text from ${req.params.postid}`,
        author: 'Unknown'
    });
})

module.exports = router