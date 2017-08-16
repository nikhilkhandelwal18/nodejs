var EventEmitter = require('events');
var util = require('util');

function Greeter() {
    this.greeting= 'Hello World!';
}

util.inherits(Greeter, EventEmitter);

Greeter.prototype.greet = function(data) {
    console.log(this.greeting + ' : ' + data);
    this.emit('greet', data);
}

var greeter1 = new Greeter();
greeter1.on('greet', function(data){
    console.log('Someone greeted!' + ' : '+ data);
});

greeter1.greet('Jane');
