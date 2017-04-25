const mongoose = require('mongoose');
const chalk = require('chalk');
const mongooseaa = require('../../config/mongoose');
const Q = require('q');

mongoose.Promise = Q.Promise;
mongooseaa.loadModels();

const OrderDB = mongoose.model('Order');

module.exports = OrderDB;


module.exports.getOrders = () => {
    let promise = OrderDB.find().select().exec();
    return promise;
};

module.exports.getOrder = (root, {orderId}) => {
  let promise = OrderDB.findOne({  'orderId': orderId }).exec();
  return promise;
};

module.exports.getViewer = () => {
    let promise = OrderDB.find().select().exec();
    promise.then((orders) => {

        // console.log(orders);
    });
    return promise;
};
