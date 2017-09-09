var express = require('express');
var path = require('path');
// Get the adodb module
var ADODB = require('node-adodb');
ADODB.debug = true;

var app = express();

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.port || 3000;

//middleware
app.use('/assets', express.static(path.join(__dirname, '../', 'public')));

//template engine set
app.set('view engine', 'ejs');

//custom middleware : execute between express req and response
app.use('/', function (req, res, next) {
    console.log('Request Url: ' + req.url);
    // Connect to the MS Access DB
    //var connection = ADODB.open('Provider=Microsoft.ACE.OLEDB.12.0;Data Source=E:\\Nikhil\\nodejs\\structuring-myapp\\database\\AddressBook.accdb;Persist Security Info=False;');
    var connection = ADODB.open('Provider=Microsoft.Jet.OLEDB.4.0;Data Source=E:\\Nikhil\\nodejs\\structuring-myapp\\database\\AddressBook.mdb;Persist Security Info=False;');  

    connection
        .query(`SELECT People.ID, People.FirstName, People.LastName, Addresses.Address
                FROM People INNER JOIN (Addresses INNER JOIN PersonAddress ON Addresses.[ID] = PersonAddress.[AddressID]) 
                ON People.[ID] = PersonAddress.[PersonID];
                `)
        .on('done', function (data) {
            //console.log(JSON.stringify(data, null, 2));
            //console.log(data);
            console.log(data[0].FirstName);
        })
        .on('fail', function (error) {
           console.log(error);
        });
    

    //next();
});

htmlController(app);

apiController(app);

app.listen(port);