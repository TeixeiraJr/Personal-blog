const dbConfig = require('../config/config');
const mysql = require('mysql2');

let connection = mysql.createConnection(dbConfig);

exports.createUser = (params) => {
  console.log('params', params);
  let query = `
        INSERT INTO
        users
        (
        username,
        email
        )
        VALUES
        ('${params.user.name}',
        '${params.user.email}')
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