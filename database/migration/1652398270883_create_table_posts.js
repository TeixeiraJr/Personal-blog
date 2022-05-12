module.exports = {
    "up": "CREATE TABLE db.posts (id INT auto_increment NOT NULL, CONSTRAINT NewTable_PK PRIMARY KEY (id), title VARCHAR(100) NULL, content LONGTEXT NULL, Column1 TINYINT NOT NULL, created_at DATETIME NULL, updated_at DATETIME NULL) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci",
    "down": ""
}