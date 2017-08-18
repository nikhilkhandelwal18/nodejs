function greet(callback) {
    console.log('Hello World!');
    callback();
};

greet(function(){
    console.log('The callback has invoked!');
});

greet(function(){
    console.log('A different     callback has invoked!');
});


//------- with paramater
function greetParam(callback) {
    console.log('Hello World!');
    
    var data = {
        name: 'John Doe'
    };
    
    callback(data);
};

greetParam(function(data){
    console.log('The callback has invoked!');
    console.log(data);
    console.log(data.name);
    
});