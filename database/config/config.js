const path = require('path');
const dotenv = require('dotenv').config({
    path: path.resolve(__dirname, '../../.env')
});

module.exports = {
    connectionLimit : 10,
    host: 'localhost',
    username: 'root',
    password: 'password',
    database: 'db',
    port: '3307'
}