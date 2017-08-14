var NodeEmitter = require('events');

var Emitter = require('./event-emitter/emitter');

var eventConfig = require('./event-emitter/config').events;

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

////////////////////////////
var emtr = new NodeEmitter();

//greet : property name
emtr.on(eventConfig.GREET, function(){
    console.log('Somewhere, someone said hello. Node Emitter');
});
emtr.on(eventConfig.GREET, function(){
    console.log('A greeting occured! Node Emitter');
});
emtr.on('greet1', function(){
    console.log('Another greeting occured! Node Emitter');
});
console.log('hello Node Emitter!');
emtr.emit('greet');
emtr.emit('greet1');