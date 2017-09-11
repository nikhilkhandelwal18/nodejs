var express = require('express');
var app = express();
var path = require('path');

var port = process.env.port || 3000;

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));


var serverPeople = [
    {
        name: 'John Doe'
    },
    {
        name: 'Jane Doe'
    },
    {
        name: 'Jim Doe'
    }
];



app.get('/', function(req, res) {
    res.render('index' , { serverPeople: serverPeople});
});

app.listen(port);