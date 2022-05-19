const express = require ('express');
const userController = require('../controller/userController');
const router = express.Router();

router.use(express.json());
router.post('/users', userController.createUser);


module.exports = router