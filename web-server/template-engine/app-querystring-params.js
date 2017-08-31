var express = require('express');
var app = express(); //returning a function with some properties look into express js 

var path = require('path');

var port = process.env.PORT || 3000; // this or default

console.log(__dirname + '/public');
console.log(path.dirname('public'));
console.log(path.join(__dirname, '../', 'public'))

//middleware
app.use('/assets', express.static(path.join(__dirname, '../', 'public')));

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
    res.render('person-params', { 
                            ID: req.params.id,
                            Qstr: req.query.qstr
                        });
});

app.listen(port);