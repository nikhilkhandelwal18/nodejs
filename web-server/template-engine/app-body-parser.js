var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express(); //returning a function with some properties look into express js 

// parse application/x-www-form-urlencoded 
var urlencodedParser = bodyParser.urlencoded({ extended: false });
//json body parser
var jsonParser = bodyParser.json();

var port = process.env.PORT || 3000; // this or default

//middleware
app.use('/assets', express.static(path.join(__dirname, '../', 'public')));


//template engine set
app.set('view engine', 'ejs');

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


app.post('/person', urlencodedParser, function(req, res) {
    res.send('Thank You!');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
    
});

app.post('/personjson', jsonParser, function(req, res) {
    res.send('Thank You for the JSON data!');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
})

app.listen(port);