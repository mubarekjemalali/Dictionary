
const express = require('express');
const url = require('url');
const search = require('./word');

const app = express();



app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.json());
app.use('/public', express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.render('index')
})


app.get('/search', (req, res) => {

    let par = url.parse(req.url, true).query;
    // console.log(req.body);
    // let word = req.body.word;
    let word = par.word;
    // console.log("--------------------");
    // console.log(word);

    search.lookup(word)
        // .then((p) => p.json())
        .then(data => {
            // console.log(data);
            res.json(data);
        })



    // .then(data => res.render('display', data));

    // .then((word, definition));

})
const port = 8080;
app.listen(port, () => console.log("serever is running"));