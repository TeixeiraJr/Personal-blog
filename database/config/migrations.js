
const mysql = require('mysql2');
const migration = require('mysql-migrations');
const dotenv = require('dotenv').config();

var connection = mysql.createPool({
  connectionLimit : 10,
  host     : 'localhost',
  port     : '3307',
  user     : 'user',
  password : 'password',
  database : 'db'
});


migration.init(connection, __dirname + '/../migration');