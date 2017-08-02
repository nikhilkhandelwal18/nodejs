/*
first (
) brackets makes it expression for imediate
normal function(){}
then () >> makes it imediate call
Imediate Invoked Function Expression
*/


//2.
var firstname = 'jane';

//3. pass parameter

(function (lastname) {

    var firstname = 'John';
    console.log(firstname);
    console.log(lastname);
    
}('Doe'));

//1. 
//var firstname = 'jane';
console.log(firstname);
