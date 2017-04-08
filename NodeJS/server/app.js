const express = require('express');
const morgan = require('morgan');
var app = express();


/* Debug middleware */
app.use(morgan('dev'));
// close Debug middleware

/* Handle each route */

app.get('/', function(req, res) {
	res.send('<h1>Hello world</h1>');
});

/* ERROR HANDLERS */

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.send({
			status: err.status,
			message: err.message,
			error: err
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.send({
		status: err.status,
		message: err.message,
		error: {}
	});
});


module.exports = app;