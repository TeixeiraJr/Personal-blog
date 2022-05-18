const dbConfig = require('../config/config');
const mysql = require('mysql2');

let connection = mysql.createConnection(dbConfig);

exports.insertPost = (params) => {
  console.log('params', params);
        let query = `
        INSERT INTO
        posts
        (
        title,
        content,
        author_id
        )
        VALUES
        ('${params.post.title}',
        '${params.post.content}',
        '${params.post.author_id}')
        `;
        connection.query(query, function (err, result, fields) {
        if (err) throw err;
        if (result) return result;
        });
};