var fs = require('fs');

/* read */

var readable = fs.createReadStream(__dirname + '/random.txt');

readable.on("data", function(chunk){
    console.log(chunk);
})

var readableText = fs.createReadStream(__dirname + '/random.txt', 
                                                { 
                                                    encoding: 'utf8',
                                                    highWaterMark: 16 * 1024 //32 * byte == 32kb , set size of buffer
                                                });

// readableText.on("data", function(chunk){
//     console.log(chunk);
// })


readableText.on("data", function(chunk){
    console.log(chunk.length);
})

/* write */
var writable = fs.createWriteStream(__dirname + '/random-copy.txt');

readableText.on("data", function(chunk){
    console.log(chunk);
    writable.write(chunk);
})
