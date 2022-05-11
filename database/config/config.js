const path = require('path');
const dotenv = require('dotenv').config({
    path: path.resolve(__dirname, '../../.env')
});

module.exports = {
    connectionLimit : 10,
    host: process.env.DATABASE_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: process.env.DATABASE_PORT
}


/* DATABASE_TYPE='mysql'
DATABASE_HOST='localhost'
DB_USERNAME='root'
DB_PASSWORD='password'
DATABASE_NAME='db'
DATABASE_PORT='3307' */