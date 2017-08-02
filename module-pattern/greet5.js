//function constructor
function Greetr(){
    this.greeting = 'Hello World create object on module!!!';
    this.greet = function(){
        console.log(this.greeting);
    }
}

//instead of creating new object, give module the ability to create new object
module.exports = Greetr;