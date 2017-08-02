/* 1 */
// var a = 1;
// var b = 2;
// var c = a + b;

// console.log(a);
// console.log(b);
// console.log(c);

/* 2 */
//Function statment
function greet() {
    console.log('hi');
}
greet();

//functions are first-class
function logGreeting(fn) {
    fn();
}
logGreeting(greet);

//function expression
//similar to var greetMe = 'Hi'
//anonymous fnct >> no name
var greetMe = function() {
    console.log('Hi Nikhil');
}
greetMe();

//its' first-class too 
logGreeting(greetMe);


// use a function expression on the fly
//similar logGreeting('Hello');
logGreeting(function() {
    console.log('Hello Nikhil!');
})