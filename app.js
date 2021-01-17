const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
var session = require('express-session');
const connectionController = require('./Controller/connectionController');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'Views'));
app.set('view engine', 'ejs');

app.use(session({
  secret : 'supreeth',
  resave : false,
  saveUninitialized : true
}))
// setting up static files path
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'assets')));

// routes
app.use('/', connectionController);

// end of error handling
app.listen(8080);
// exporting app
module.exports = app;
