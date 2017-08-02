var greet = require('./module-pattern/greet1');
greet();

var greet = require('./module-pattern/greet2');
greet();


var greet = require('./module-pattern/greet3');
greet.greet();
//OR
var greet = require('./module-pattern/greet3').greet;
greet();

