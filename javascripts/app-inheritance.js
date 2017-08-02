//function constructor

function Person(firstname, lastname){
    //this will crete empty object and then added property
    this.firstname = firstname;
    this.lastname = lastname;
}

//this. >> talking about object not variable
Person.prototype.greet = function() {
    console.log('Hello! ' + this.firstname +' '+ this.lastname);
}


var john = new Person('John', 'Doe');
console.log(john.firstname);

john.greet(); // serach for its prototype
//Prototype property in code will be available to any object which is created from this particular object

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);

console.log(john.__proto__ === jane.__proto__);
console.log(john === jane);
