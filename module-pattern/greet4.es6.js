class Greetr {
    // constructor(x, y) {
    //     this.x = x;
    //     this.y = y;
    // }
    // toString() {
    //     return '(' + this.x + ', ' + this.y + ')';
    // }


        constructor() {
            this.greeting = 'Hello World (es6)!!!';
            
        }

        greet(){
            console.log(this.greeting);
        }

}

module.exports = new Greetr();