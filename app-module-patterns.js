var greet1 = require('./module-pattern/greet1');
greet1();

var greet2 = require('./module-pattern/greet2');
greet2();


var greet3 = require('./module-pattern/greet3');
greet3.greet();
//OR
var greet3 = require('./module-pattern/greet3').greet;
greet3();


//es6
var greet4 = require('./module-pattern/greet4.es6');
greet4.greet();

var greet4 = require('./module-pattern/greet4');
greet4.greet();

//caching : require creates cache the result
greet4.greeting = 'Changed greeting';
var greet4b = require('./module-pattern/greet4');
greet4b.greet();

//create object here, it returns function constructor and require does not cache it.
var Greet5 = require('./module-pattern/greet5');
var grtr = new Greet5();
grtr.greet();

grtr.greeting = 'changed greeting after module create object';
var Greet5a = require('./module-pattern/greet5'); // require not have cached and create new again
var grtr = new Greet5a();
grtr.greet();


var greet6 = require('./module-pattern/greet6'); // require not have cached and create new again
greet6.greet();
greet6.greet2();

