var obj = {
    name:'John Doe',
    greet: function() {
        console.log(`Hello ${ this.name }`);
    }
}

obj.greet();
obj.greet.call({name: 'Jane Doe'});
obj.greet.apply({name: 'Jane Doe'});

/* Diff
greet: function(params) {
        console.log(`Hello ${ this.name }`);
    }


call: passes param(s) with comman separate
obj.greet.call({name: 'Jane Doe'}, param1, param2);

apply: passes param(s) as array 
obj.greet.apply({name: 'Jane Doe'}, [param1, param2]);


*/
