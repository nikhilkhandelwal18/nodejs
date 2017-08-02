var greeting = 'Hello World !!!!!';
function greet() {
    console.log(greeting);
}

function greet2() {
    console.log(greeting + 'greet2');
}

module.exports = {
    greet: greet,
    greet2: greet2
}

//revealing module pattern
//expose only property and methods you want via   an returned object