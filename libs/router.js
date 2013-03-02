
var fs = require('fs');
module.exports = function(parent, opts){
	var verbose = opts.verbose;
	 fs.readdirSync(__dirname + '/../app/models').forEach(function(name){
	 	var obj = require('./../app/models/' + name);
	 	console.log(obj.name);
	 });
}