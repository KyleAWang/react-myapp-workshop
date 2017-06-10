const mongoose = require('mongoose');
const chalk = require('chalk');
const path = require('path');

const config = require(path.resolve('server/config/env/development'));


module.exports.connect = function (cb) {
  const db = mongoose.connect(config.db.uri, config.db.options, (err) => {
    if (err) {
      console.error(chalk.red('Could not connect to MongoDB'));
      console.log(err);
    } else {
      mongoose.set('debug', true);

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

module.exports.loadModels = function (cb) {
  require('./order.server.model.js');
  require('./user.server.model.js');
  if (cb) cb();
};
