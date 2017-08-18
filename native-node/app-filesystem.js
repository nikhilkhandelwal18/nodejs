var fs = require('fs');

//console.log(__dirname);



//synchronous
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);


//Asyn
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', 
    function(err, data) { //error first callback pattern
        if(err == null) {

        }
        console.log(data);
    }
);
//OR// utf8 is optional
var greet3 = fs.readFile(__dirname + '/greet.txt', 
    function(err, data) { //error first callback pattern
        if(err == null) {

        }
        console.log(data.toString());
    }
);

console.log('Done!');

//here problem is with buffer if user exeeds then multiple buffer will create in memory. so over come from this use STREAM