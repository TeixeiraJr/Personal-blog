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

exports.updatePost = (params) => {
  console.log('params', params);
  let query = `
    UPDATE
    posts
    SET`
    if (params.post.title) {
    query +=`
    title = 'nome editado 2',
    `
    }
    if (params.post.content) {
      query += `content = 'conteúdo editado 2',`
    }
    if (params.post.author) {
      query += `author_id = '1'`
    }
    query += `WHERE id = '${params.post.id}'`;
  connection.query(query, function (err, result, fields) {
    if (err) throw err;
    if (result) return result;
  });
};

exports.deletePost = (params) => {
  console.log('params', params);
  let query = `
    DELETE FROM
    posts
    WHERE 
    id = ${params.post.id}
    `
  connection.query(query, function (err, result, fields) {
    if (err) throw err;
    if (result) return result;
  });
};