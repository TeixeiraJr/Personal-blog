const { createComment, updateComment, deleteComment } = require('../database/repository/comments');

module.exports = {

    async createComment( req , res ) {
        // console.log('req.body', req.body);
        const users = await createComment(req.body);
        return res.json(users);
    },

    async updateComment( req , res ) {
        // console.log('req.body', req.body);
        const users = await updateComment(req.body);
        return res.json(users);
    },

    async deleteComment( req , res ) {
        // console.log('req.body', req.body);
        const users = await deleteComment(req.body);
        return res.json(users);
    },

}