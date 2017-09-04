var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();
var port = process.env.port || 3000;


app.get('/', function(req, res) { //express req, res have additional functionality than node req/res.
    res.render('index-RESTful')
});

app.get('/api/person/:id', function(req, res) { 
    //get that data from database
    res.json({firstname: 'John', lastname: 'Doe'});
});

app.post('/api/person', jsonParser, function(req, res) {
    //save to the database
})

app.delete('/api/person/:id', jsonParser, function(req, res) {
    //delete from the database
})

app.listen(port);