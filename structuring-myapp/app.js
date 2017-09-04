var express = require('express');
var path = require('path');

var app = express();

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');


var port = process.env.port || 3000;

//middleware
app.use('/assets', express.static(__dirname + '/public'));

//template engine set
app.set('view engine', 'ejs');

//custom middleware : execute between express req and response
app.use('/', function(req, res, next) {
    console.log('Request Url: ' + req.url);
    next();
});

htmlController(app);

apiController(app);

app.listen(port);