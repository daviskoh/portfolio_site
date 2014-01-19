
/**
 * Module dependencies.
 */

var express = require('express');
var engine = require('ejs-locals');
var sass = require('node-sass');

var routes = require('./routes');

var http = require('http');
var path = require('path');

var app = express();

// use ejs-locals for all ejs templates:
app.engine('ejs', engine);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(
  sass.middleware({
    src: __dirname + '/public/sass', //where the sass files are 
    dest: __dirname + '/public/', //where css should go
    debug: true,
    outputStyle: 'compressed'
  })
);

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

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

