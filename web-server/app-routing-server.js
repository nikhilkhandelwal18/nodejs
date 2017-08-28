var http = require('http');
var fs = require('fs');


http.createServer(function (req, res) {

    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        var html = fs.createReadStream(__dirname + '/index.html').pipe(res);
    }

    else if (req.url === '/api') {
        res.writeHead(200, { 'content-type': 'application/json' });
        var obj = {
            firstname: 'John',
            lastname: 'Doe'
        }

        res.end(JSON.stringify(obj));
    }
    else {
        //if nothing matches
        res.writeHead(404);
        res.end();
    }


}).listen(1337, '127.0.0.1');

