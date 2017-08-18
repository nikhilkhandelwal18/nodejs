var fs = require('fs');
var zlib = require('zlib');

/* read */
var readable = fs.createReadStream(__dirname + '/random.txt');

/* write */
var writable = fs.createWriteStream(__dirname + '/random-copy.txt');

var compressed = fs.createWriteStream(__dirname + '/random-copy.txt.gz');

var gzip = zlib.createGzip();

// readable.on("data", function(chunk){
//     console.log(chunk);
//     writable.write(chunk);
// })

readable.pipe(writable);

readable.pipe(gzip).pipe(compressed);
