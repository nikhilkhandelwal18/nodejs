'use strict';

class Person {
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet(){ //this will automatically put into prototype i.e. Person.prototype.greet 
        console.log('Hello '+ this.firstname +' '+ this.lastname);
    }
}




var john = new Person('John', 'Doe');
john.greet();
var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);

console.log(john.__proto__ === jane.__proto__);
console.log(john === jane);
