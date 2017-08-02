/*
ByVal : when pass premitive values ie. string, number
a = 'nikhil;
b = a  >> by val

ByRef: when pass object ie. person

*/

//pass by value
function change(b){
    b = 2;
}
var a = 1;
change(a);
console.log(a);


//pass by Ref
function changeObj(d) {
    d.prop1 = function(){}; //empty function
    d.prop2 = {}; //new empty object
}

var c = {}; //empty object
c.prop1 = {}; //empty object
changeObj(c);
console.log(c);