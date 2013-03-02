
/**
 * Module dependencies.
  NOTES: This app is attempting to mimic an MVC(ISH) style pattern. Obviously it's a little abstracted, but I'm hoping to achieve some sense of flow in my first node app.
  This file loads a lot of the defaults in for getting express up and running, but then calls out to the router file which will then parse out the Models, which will be
  connected to the controllers which will control the loading of the views.
 */

var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  //views for the error pages only
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

//app.get('/', routes.index);
// load router; 
require('./libs/router')(app, { verbose: !module.parent });

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
