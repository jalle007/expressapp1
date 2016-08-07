//"use strict";
var express = require('express');
var routes = require('./routes/index');
var api = require('./routes/api/index');
var http = require('http');
var path = require('path');
var app = express();

//var calc = require('./javascripts/calc.js');


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
var stylus = require('stylus');
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}
//app.get('/calc',
//  function (req, res) {
    
    
//   res.send( calc.sum(1));
//  }
//);


app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/contact', routes.contact);
app.get('/hello', routes.hello);
app.get('/api', api.api);
app.get('/api/sum', api.sum);
app.get('/api/avg', api.avg);
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
//# sourceMappingURL=app.js.map