
const { rejects } = require('assert');
let mysql = require('mysql2');

let lookup = function (w) {

    const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mubithelong1',
        database: 'entries'
    });

    let p = new Promise((res, rej) => {

        db.query("SELECT definition, wordtype FROM entries WHERE word=?", [w], (err, result, fields) => {
            if (err) {
                console.log(err);
                //rej(err);
            }
            res(result)
        })

    });
    return p;


}

module.exports = {
    lookup
}