var express = require('express');
var app = express(); //returning a function with some properties look into express js 

//app.listen(3000);
// or configurable ,"process" is node global has "env" property and "PORT" variable is configurable

var port = process.env.PORT || 3000; // this or default


//express routing
app.get('/', function(req, res) { //express req, res have additional functionality than node req/res.
    res.send(`<html>
    <head></head>
    <body>
        <h1>Hello World! </h1>
    </body>
    </html>`);

});

app.get('/api', function(req, res) {
    res.json({
        firstname: 'John',
        lastname: 'Doe'
    });

})

app.get('/person/:id', function(req, res) {
    //OR any pattern matching
//app.get('/person/:page/:id', function(req, res) {
    res.send(`<html>
    <head></head>
    <body> ${req.params.id}
        <h1> Person: ` + req.params.id + `</h1>
    </body>
    </html>`);

});


app.listen(port);