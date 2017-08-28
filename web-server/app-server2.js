var http = require('http');
var fs = require('fs');


http.createServer(function(req, res) { 
    
    res.writeHead(200, {'content-type': 'text/html' });
    var html = fs.readFileSync(__dirname + '/dynamic-template.html', 'utf8'); //converts to string/stream from buffer
    var message = 'hello world ...';
    html = html.replace('{Message}', message);

    res.end(html);
    
}).listen(1337, '127.0.0.1');

