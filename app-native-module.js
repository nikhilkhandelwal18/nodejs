var util = require('util');


var name = 'John';
var greeting = util.format('Hello , %s', name);
util.log(greeting);


//--------------------------//
/*
async function fn() {
  return await Promise.resolve('hello world');
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
  if (err) throw err;
  console.log(ret);
});
*/
