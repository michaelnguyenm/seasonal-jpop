'use strict';

// Development environment
process.env.NODE_ENV  = process.env.NODE_ENV || 'development';

// Require is built into node.js to load nodules, like an import/include
var express = require('express');
var config = require('./config');

// Setup the server
var app = express();
var http = require('http');

// Express configuration
require('./config/express')(app);
// Route configuration
require('./routes')(app);

// Start server
http.createServer(app).listen(config.port, function() {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

//Expose app
exports = module.exports = app;
