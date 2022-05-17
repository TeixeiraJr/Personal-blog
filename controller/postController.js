const { createPost } = require('../database/repository/posts');

module.exports = {

    async createPost( req , res ) {
        const users = await insertPost();
        return res.json(users);
    }
}