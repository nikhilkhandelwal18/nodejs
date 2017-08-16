'use strict';
var Greetr = require('./event-emitter-inheritance4-node');


var greetr = new Greetr();
greetr.on('greet', function(data){
    console.log('Someone greeted!' + ' : '+ data);
});

greetr.greet('Jane');
