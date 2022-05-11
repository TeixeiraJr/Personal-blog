const path = require('path');
const dotenv = require('dotenv').config({
    path: path.resolve(__dirname, '../../.env')
});

module.exports = {
    connectionLimit : 10,
    host     : process.env.DATABASE_HOST,
    user     : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database : process.env.DATABASE_NAME,
    port     : process.env.DATABASE_PORT
}