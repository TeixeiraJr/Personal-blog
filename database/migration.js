var mysql = require('mysql2');
var migration = require('mysql-migrations');
const dbConfig = require('./config/config');

var connection = mysql.createPool({dbConfig});

migration.init(connection, __dirname + '/migrations');