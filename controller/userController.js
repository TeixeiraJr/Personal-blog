const { createUser } = require('../database/repository/users');

module.exports = {

    async createUser( req , res ) {
        // console.log('req.body', req.body);
        const users = await createUser(req.body);
        return res.json(users);
    }

}