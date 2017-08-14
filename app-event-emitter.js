var Emitter = require('./event-emitter/emitter');

var emtr = new Emitter();

//greet : property name
emtr.on('greet', function(){
    console.log('Somewhere, someone said hello.');
});


emtr.on('greet', function(){
    console.log('A greeting occured!');
});

emtr.on('greet1', function(){
    console.log('Another greeting occured!');
});

console.log('hello!');
emtr.emit('greet');
emtr.emit('greet1');