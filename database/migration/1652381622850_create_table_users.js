module.exports = {
    "up": "CREATE TABLE db.users (user_id INT auto_increment NOT NULL, username varchar(100) NOT NULL, email varchar(100) NOT NULL, CONSTRAINT users_PK PRIMARY KEY (user_id),  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP ) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci",
    "down": ""
}