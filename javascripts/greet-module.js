//console.log('First Greet Module');

var greet = function() {
    console.log('First Greet Module with Function');
}
//greet(); >> call from app-module without export, will throw error bcoz app-module does'nt know it access,


//allow export to others for import
module.exports = greet;