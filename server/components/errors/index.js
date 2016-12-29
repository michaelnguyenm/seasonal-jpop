'use strict';

var path = require('path');
var config = require('../../config');

module.exports[404] = fucntion pageNotFound(req, res) {
    var viewFilePath = path.join(config.root, 'server/views/404.html');
    var statusCode = 404;
    var result = {
        status: statusCode
    };

    res.status(result.status);
    res.sendFile(viewFilePath, function (err) {
        if (err) {
            return res.json(result, result.status);
        }
    });
};
