const mysql = require('mysql2');
const migration = require('mysql-migrations');
const path = require('path');
const dotenv = require('dotenv').config({
    path: path.resolve(__dirname, '../.env')
});
const connection = mysql.createPool({
  connectionLimit : 10,
  host     : process.env.DATABASE_HOST,
  user     : process.env.DB_USERNAME,
  password : process.env.DB_PASSWORD,
  database : process.env.DATABASE_NAME,
  port     : process.env.DATABASE_PORT
});

migration.init(connection, __dirname + '/migration');