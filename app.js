
/**
 * Module dependencies.
 */

var express = require('express');
var sass = require('node-sass');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(
  sass.middleware({
    src: __dirname + '/public/sass', //where the sass files are 
    dest: __dirname + '/public', //where css should go
    debug: true,
    outputStyle: 'compressed'
  })
);

app.use(express.static(path.join(__dirname, '/public')));

app.use(app.router);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.about);
app.get('/about', routes.about);
app.get('/portfolio', routes.portfolio);
app.get('/contact', routes.contact);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

