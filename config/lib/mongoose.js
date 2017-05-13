

let config = require('../config'),
  chalk = require('chalk'),
  path = require('path'),
  logger = require('./logger'),
  mongoose = require('mongoose');

module.exports.loadModels = function (callback) {
  config.files.server.models.forEach((modelPath) => {
    require(path.resolve(modelPath));
  });

  if (callback) callback();
};

const dburi = 'mongodb://localhost/papp-dev';

module.exports.connect = function (cb) {
  const _this = this;
  logger.info(config.db.uri);
  const db = mongoose.connect(dburi, {}, (err) => {
    if (err) {
      console.error(chalk.red('Could not connect to MongoDB'));
      console.log(err);
    } else {
      mongoose.set('debug', config.db.debug);

      if (cb) cb(db);
    }
  });
};

module.exports.disconnect = function (cb) {
  mongoose.disconnect((err) => {
    console.info(chalk.yellow('Disconnected from MongoDB'));
    cb(err);
  });
};
