module.exports = {
    "up": "CREATE TABLE db.comments (comment_id INT auto_increment NOT NULL, content MEDIUMTEXT NOT NULL, comment_author TEXT NULL, post_id INT NOT NULL, CONSTRAINT comments_PK PRIMARY KEY (comment_id), CONSTRAINT comments_FK FOREIGN KEY (comment_id) REFERENCES db.posts(id) ) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci",
    "down": ""
}