const mongoose = require('mongoose');
const chalk = require('chalk');
const mongooseaa = require('../../config/mongoose');
const Q = require('q');

mongoose.Promise = Q.Promise;
mongooseaa.loadModels();

const OrderDB = mongoose.model('Order');

module.exports = OrderDB;


module.exports.getOrders = (root, { offset, limit }) => {
  let promise = null;
  if (!isNaN(offset) && !isNaN(limit)) {
    let _offset = parseInt(offset);
    let _limit = parseInt(limit);
    if (_offset < 0) _offset = 0;
    if (_limit < 0) _limit = 0;
    promise = OrderDB.find().sort('-created').skip(_offset).limit(_limit).exec();
  } else {
    promise = OrderDB.find().sort('-created').exec();
  }
  return promise;
};

module.exports.getOrder = (root, { orderId }) => {
  const promise = OrderDB.findOne({ orderId }).exec();
  return promise;
};

module.exports.getViewer = () => {
  const promise = OrderDB.find().select().exec();
  promise.then((orders) => {

        // console.log(orders);
  });
  return promise;
};
