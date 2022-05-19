module.exports = {
    "up": "CREATE TABLE db.comments (comment_id INT auto_increment NOT NULL, content MEDIUMTEXT NOT NULL, comment_author TEXT NULL, post_id INT NOT NULL,  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, CONSTRAINT comments_PK PRIMARY KEY (comment_id), CONSTRAINT comments_FK FOREIGN KEY (comment_id) REFERENCES db.posts(id) ON DELETE CASCADE) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci",
    "down": ""
}