const Calculator = require('../models/Calculator');

exports.sendPost = (params) => {

    con.connect(function(err) {
        if (err) throw err;
        let query = `
        INSERT INTO
        posts
        (
        title,
        content,
        author_id,
        )
        VALUES
        ${params.post.title}
        ${params.post.content}
        ${params.post.author_id}
        `;
        con.query(query, function (err, result, fields) {
          if (err) throw err;
          console.log(result);
        });
      });
    return true
};