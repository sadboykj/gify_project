// app.js
var express = require('express');
var app = express();
// express handlebars
var exphbs = require('express-handlebars');
// require http module
var http = require('http');
// initialize giphy-api library
var giphy = require('giphy-api')();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// telling express app that static files will be in public folder
app.use(express.static('public'));

app.get('/hello-gif', function (req,res) {
    // Look up gif from the database
    var gifUrl = 'http://media2.giphy.com/media/gYBVM1igrlzH2/giphy.gif';
    // Render the template to display the user's info
    res.render('hello-gif', {gifUrl: gifUrl})
    // res.send('Hello Gif')
});

app.get('/', function (req, res) {
    // display search term in terminal
    console.log(req.query.term)
    // search term and render image
    giphy.search(req.query.term, function (err, response) {
        res.render('home', {gifs: response.data})
    })
});

// app.get('/', function (req, res) {
//     console.log(req.query.term)
//     var queryString = req.query.term;
//     // remove white spaces and restricted characters
//     var term = encodeURIComponent(queryString)
//     // put search term in giphy api search gify URL
//     var url = 'http://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=dc6zaTOxFJmzC'
//
//     http.get(url, function(response) {
//         // set encoding of response to utf8
//         response.setEncoding('utf8');
//
//         var body = '';
//
//         response.on('data', function(d) {
//             // continously update stream with data from giphy
//             body += d;
//         });
//
//         response.on('end', function() {
//             // when data is fulled recieved parse into json
//             var parsed = JSON.parse(body);
//             // render the home template and pass the gif data in to the template
//             res.render('home', {gifs: parsed.data})
//         });
//     });
// });

app.get('/greetings/:name' , function(req, res) {
    // Store name
    var name = req.params.name;
    //Render to display name
    res.render('greetings', {name: name});
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
