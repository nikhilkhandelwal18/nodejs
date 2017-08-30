var express = require('express');
var app = express(); //returning a function with some properties look into express js 

var port = process.env.PORT || 3000; // this or default


//middleware
app.use('/assets', express.static(__dirname + '/public'));

//custom middleware
//execute between express req and response
app.use('/', function(req, res, next) {
    console.log('Request Url: ' + req.url);
    next();
})


//express routing
app.get('/', function(req, res) { //express req, res have additional functionality than node req/res.
    res.send(`<html>
    <head>
        <link href = assets/style.css type = text/css rel = stylesheet> </link>
    </head>
    <body>
        <h1>Hello World! </h1>
    </body>
    </html>`);

});

app.listen(port);