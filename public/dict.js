// const express = require('express');

// const mysql = require('mysql');

// const app = express();

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'mubithelong1',
//     database: 'entries'
// });

// console.log("------------------------************");
// console.log(db);

// // db.connect((err) => {
// //     if (err) {
// //         throw err;

// //     }
// //     console.log("mysql connected");
// // })


// app.get('/', (req, res) => {
//     res.render('index')
// })
// const port = 8080;
// app.listen(port, () => console.log("serever is running"));


// function word(word) {
//     return word;
// }


$(document).ready(() => {
    let word;

    $("#search").click(() => {
        word = $("#word").val();
        get(word);

    })

})

function get(word) {

    let wjason = { 'word': word };

    $.ajax("http://localhost:8080/search?word=" + word,
        {
            'headers': { 'Content-Type': 'application/json' },
            "type": "GET",
            // "body": JSON.stringify(wjason)
        })
        .done((r) => {
            $('#def').empty();
            for (let i = 0; i < r.length; i++) {
                $('#def').append('<li>' + r[i].definition + '</li>');
            }
            // console.log(r);
            // $('#display').text(r[0].definition)
        })
        .fail(r => console.log(r));

}

// module.exports = word;