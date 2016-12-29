'use strict';

var express = require('express');
var morgan = require('morgan');
var compression = require('compression');
var errorHandler = require('errorHandler');
var path = require('path');
var config = require('./index');

module.exports = function(app) {
    app.use(compression());
    app.use(express.static(path.join(config.root, 'public')));
    app.set('appPath', path.join(config.root, 'public'));
    app.use(morgan('dev'));
    app.use(errorHandler());
};
