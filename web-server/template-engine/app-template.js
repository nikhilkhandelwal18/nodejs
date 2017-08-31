var express = require('express');
var app = express(); //returning a function with some properties look into express js 

var port = process.env.PORT || 3000; // this or default


//middleware
app.use('/assets', express.static(__dirname + '/public'));

//template engine set
app.set('view engine', 'ejs');


//custom middleware
//execute between express req and response
app.use('/', function(req, res, next) {
    console.log('Request Url: ' + req.url);
    next();
})


//express routing
app.get('/', function(req, res) { //express req, res have additional functionality than node req/res.
    res.render('index')
});


app.get('/person/:id', function(req, res) { //express req, res have additional functionality than node req/res.
    res.render('person', { ID: req.params.id});
});

app.listen(port);