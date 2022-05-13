module.exports = {
    "up": "CREATE TABLE db.posts (id INT auto_increment NOT NULL, CONSTRAINT posts_PK PRIMARY KEY (id), title VARCHAR(100) NULL, content LONGTEXT NULL, author_id INT NOT NULL, CONSTRAINT posts_FK FOREIGN KEY (author_id) REFERENCES db.posts(id), created_at DATETIME NULL, updated_at DATETIME NULL) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci",
    "down": ""
}