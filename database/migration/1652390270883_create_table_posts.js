module.exports = {
    "up": "CREATE TABLE db.posts (id INT auto_increment NOT NULL, CONSTRAINT posts_PK PRIMARY KEY (id), title VARCHAR(100) NULL, content LONGTEXT NULL, author_id INT NOT NULL, CONSTRAINT posts_FK FOREIGN KEY (author_id) REFERENCES db.users(user_id) ON DELETE CASCADE, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci",
    "down": ""
}