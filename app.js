// Diamond Dog v1.0 Server
// An Express.js & Node.js powered starter kit for apps and sites.

// LIBRARIES
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var csrf = require('csurf');
var stylus = require('stylus');
var nib = require('nib');

// EXPRESS APP
var app = express();

// TEMPLATE ENGINE - JADE
app.set('views', './views');
app.set('view engine', 'jade');

// STYLUS MIDDLEWARE
var compileStylus = function(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib());
};

app.use(stylus.middleware({src: __dirname + '/public', compile: compileStylus}));
app.use(express.static(__dirname + '/public'));

// Use body-parser for parsing requests:
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use cookie-parser for getting and setting cookies:
app.use(cookieParser());

// CSRF protection:
app.use(csrf({ cookie: true }));


// ROUTES
app.get('/', function(req, res) {
  res.render('home', {
        message: "Diamond Dog is working!"
    });
});

app.get('/form', function(req, res) {
  res.render('form', {
        csrfToken: req.csrfToken()
    });
});

app.post('/form', function(req, res) {
  var payload = req.body;

  res.render('result', {
      status: "POST SUCCESS",
      name: payload.name,
      saying: payload.saying
    });
});


// PING ROUTES (for testing)
app.get('/ping', function(req, res) {
  console.log('PING received, GET');
  res.send('PONG - Method: GET');
});

app.post('/ping', function(req, res) {
  console.log('PING received, POST');
  console.log(req.body);
  res.send('PONG - Method: POST');
});


// SERVER SETTINGS
var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Diamond Dog is listening at http://%s:%s', host, port);
});
