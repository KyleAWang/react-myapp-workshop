'use strict';

exports.renderNotFound = function (req, res) {
  res.status(404).format({
    'text/html': function () {
      res.send('Path not found');
    },
    'application/json': function () {
      res.json({
        error: 'Path not found'
      });
    },
    'default': function () {
      res.send('Path not found');
    }
  });
};
