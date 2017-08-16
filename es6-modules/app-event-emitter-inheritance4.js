'use strict';

var EventEmitter = require('events');

class Greetr extends EventEmitter {
    constructor() {
        super(); //EventEmitter.call(this);
        this.greeting = 'Hello World!';
    }

    greet(data) {
        console.log(`${ this.greeting } : ${ data }`)   ;
        this.emit('greet', data);
    }
}

var greetr = new Greetr();
greetr.on('greet', function(data){
    console.log('Someone greeted!' + ' : '+ data);
});

greetr.greet('Jane');
