var express = require('express');
var path = require('path');
var mongoose = require('mongoose');

var app = express();
var port = process.env.port || 3000;

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://nikhil.khandelwal:!qaz2wsx@ds131384.mlab.com:31384/addressbook' ,{ useMongoClient: true });
mongoose.connect('mongodb://test:test@ds131384.mlab.com:31384/addressbook', { useMongoClient: true })
//.then(() => require('./db-init')(express))
.catch(err => console.error(err));

//Defining a Model
var Schema = mongoose.Schema, 
    ObjectId = Schema.ObjectId;

var personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String
});

var Person = mongoose.model('person', personSchema);

var john = Person({
    firstname : 'John',
    lastname : 'Doe',
    address : '555 Main St.'
});

//save the user
john.save(function(err) {
    if(err) throw err;

    console.log('Person Saved!');
});

var jane = Person({
    firstname : 'Jane',
    lastname : 'Doe',
    address : '555 Main St.'
});
//save the user
jane.save(function(err) {
    if(err) throw err;

    console.log('Person Saved!');
});

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

//middleware
app.use('/assets', express.static(path.join(__dirname, '../', 'public')));

//template engine set
app.set('view engine', 'ejs');

app.use('/', function(req, res, next) {
    console.log('Request Url: ' + req.url);

    //get all users
    Person.find({}, function(err, users) {
        if(err) throw err;
        //object of all users
        console.log(users);
    });

    next();
})


htmlController(app);

apiController(app);



app.listen(port);

