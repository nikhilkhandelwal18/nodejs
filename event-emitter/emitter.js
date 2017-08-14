function Emitter()
{
    this.events = {}; //Object 
}

Emitter.prototype.on = function(type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}


//emitter; something happened
Emitter.prototype.emit = function(type) {
    if(this.events[type]){
        this.events[type].forEach(function(listener) {
         listener();  
         console.log('common function can be called') 
        });
    }
}

module.exports = Emitter; 