// app.js
var express = require('express');
var app = express();
// express handlebars
var exphbs = require('express-handlebars');

app.get('/hello-squirrel', function (req,res) {
    //Look up user from the database
    //Render the template to display the user's info
    res.send('Hello Squirrel')
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.engine('handlebars', exphbs({defaultLayout: 'main}'}));
app.set('view engine', 'handlebars');
