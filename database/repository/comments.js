const dbConfig = require('../config/config');
const mysql = require('mysql2');

let connection = mysql.createConnection(dbConfig);

exports.createComment = (params) => {
  console.log('params', params);
  let query = `
        INSERT INTO
        comments
        (
        content,
        comment_author,
        post_id
        )
        VALUES
        ('${params.comment.content}',
        '${params.comment.author}',
        ${params.comment.post_id})
        `;
  connection.query(query, function (err, result, fields) {
    if (err) throw err;
    if (result) return result;
  });
};

exports.updateComment = (params) => {
  console.log('params', params);
  let query = `
    UPDATE
    comments
    SET
    content = '${params.comment.content}'
    WHERE comment_id = ${params.comment.id}`;
  connection.query(query, function (err, result, fields) {
    if (err) throw err;
    if (result) return result;
  });
};

exports.deleteComment = (params) => {
  console.log('params', params);
  let query = `
    DELETE FROM
    comments
    WHERE 
    comment_id = ${params.comment.id}
    `
  connection.query(query, function (err, result, fields) {
    if (err) throw err;
    if (result) return result;
  });
};