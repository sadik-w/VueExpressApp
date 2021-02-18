var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var logger = require('morgan');
var app = express();
var session = require('express-session');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var mongoose = require('./db')
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('MAGICSTRING'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(session({
  secret: '12345',
  name: 'TOKEN',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
  cookie: { maxAge: 80000, httpOnly: true },  //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
  resave: false,
  saveUninitialized: true,
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, './public/github.png')))
var route = require('./routes/index').route;
route(app);
module.exports = app;
