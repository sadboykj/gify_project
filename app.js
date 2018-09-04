// app.js
var express = require('express');
var app = express();
// express handlebars
var exphbs = require('express-handlebars');

app.get('/hello-gif', function (req,res) {
    // Look up gif from the database
    var gifUrl = 'http://media2.giphy.com/media/gYBVM1igrlzH2/giphy.gif';
    // Render the template to display the user's info
    res.render('hello-gif', {gifUrl: gifUrl})
    // res.send('Hello Gif')
});

app.get('/greetings/:name' , function(req, res) {
    // Store name
    var name = req.params.name;
    //Render to display name
    res.render('greetings', {name: name});
});

app.get('/', function (req, res) {
    res.render('home')
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.engine('handlebars', exphbs({defaultLayout: 'main}'}));
app.set('view engine', 'handlebars');
