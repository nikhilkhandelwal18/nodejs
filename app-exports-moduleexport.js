var greet1 = require('./exports-moduleexports/greet1');

var greet2 = require('./exports-moduleexports/greet2'); //mutant
greet2.greet();

// = assign new loction so both point differently
// mutant or extend proerty exports.<someting> change the object on same location in memory