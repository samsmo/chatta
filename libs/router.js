var express = require('express'),
	fs = require('fs');
module.exports = function(parent, opts){
	var verbose = opts.verbose;
	 fs.readdirSync(__dirname + '/../app/controllers').forEach(function(name){
	 	var obj = require('./../app/controllers/' + name),
	 		name = obj.name || name,
	 		app = express(),
	 		path,
	 		method;
	 	
	 	app.set('views', __dirname + '/../app/views/' + name + '/');
	 	// generate routes based
	 	for(var k in obj){
	 		if(typeof obj[k] !== "function") continue;
	 		switch(k){
	 			case 'index':
	 				method = 'get';
	 				path = '/'
	 			break;
	 			case 'show':
	 				method = 'get';
	 				path = '/' + name;
	 			break;
	 			case 'list':
	 				method = 'get';
	 				 path = '/' + name + '/list';
	 			break;
	 			case 'edit':
	 				method ='post'
	 				path = '/' + name + '/edit';
	 			break;
	 			case 'update':
	 				method = 'post';
	 				path = '/' + name;
	 			break;
	 			case 'create':
	 				method = 'post';
	 				path = '/' + name + '/create';
	 			default:
	 				throw new Error('route not found:'+name+'.'+k);
	 		}
	 		app[method](path, obj[k]);
	 	}
	 		
	 	//conect these routes to the application itself
	 	parent.use(app);
	 });
}