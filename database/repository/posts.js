const dbConfig = require('../config/config');
const mysql = require('mysql2');

let connection = msql.createConnection(config);

exports.insertPost = () => {
        let query = `
        INSERT INTO
        posts
        (
        title,
        content,
        author_id,
        )
        VALUES
        'post de teste',
        'conteudo do post de teste',
        '1'
        `;
        connection.query(query, function (err, result, fields) {
        if (err) throw err;
          console.log(result);
        });
        return result;
};