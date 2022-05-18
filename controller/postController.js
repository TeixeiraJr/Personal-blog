const { insertPost } = require('../database/repository/posts');

module.exports = {

    async createPost( req , res ) {
        console.log('req.body', req.body);
        const users = await insertPost(req.body);
        return res.json(users);
    }
}