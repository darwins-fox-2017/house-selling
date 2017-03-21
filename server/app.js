var express       = require('express');
var bodyParser    = require('body-parser');
var cors          = require('cors');

var House         = require('./models/house');

var index   = require('./routes/index');
var users   = require('./routes/users');
var houses  = require('./routes/houses');

var mongoose      = require('mongoose');
mongoose.Promise  = global.Promise;
mongoose.connect('mongodb://localhost/houses')

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Database Connected')
})

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

app.use('/', index);
app.use('/users', users);
app.use('/houses', houses);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
