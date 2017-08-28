var http = require('http');
var fs = require('fs');


http.createServer(function(req, res) { 
    
    res.writeHead(200, {'content-type': 'application/json' });
    var obj = {
        firstname: 'John',
        lastname: 'Doe'
    }

    //res.end(obj.toString());

res.end(JSON.stringify(obj));
    
}).listen(1337, '127.0.0.1');

