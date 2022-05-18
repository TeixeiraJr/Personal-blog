module.exports = {
    "up": "CREATE TABLE db.users (user_id INT auto_increment NOT NULL, username varchar(100) NOT NULL, email varchar(100) NOT NULL, CONSTRAINT users_PK PRIMARY KEY (user_id) ) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci",
    "down": ""
}