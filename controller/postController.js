const { deletePost, insertPost, updatePost } = require('../database/repository/posts');

module.exports = {

    async createPost( req , res ) {
        // console.log('req.body', req.body);
        const users = await insertPost(req.body);
        return res.json(users);
    },

    async updatePost( req , res ) {
        // console.log('req.body', req.body);
        const users = await updatePost(req.body);
        return res.json(users);
    },

    async deletePost( req , res ) {
        // console.log('req.body', req.body);
        const users = await deletePost(req.body);
        return res.json(users);
    },

}