const mongoose = require('mongoose');
const chalk = require('chalk');
const mongooseaa = require('../config/mongoose');
const Q = require('q');

mongoose.Promise = Q.Promise;
mongooseaa.loadModels();

const OrderDB = mongoose.model('Order');


module.exports = class Order {
}

module.exports = class Item {
}
// let orders = new Orders();
const order = new Order();

//
// order.id = '20160701156133';
// order.subtotal = 305.8;
//
// const items = [];
const orders = [];

module.exports = function getOrders() {

    let promise = OrderDB.find().select('orderId items.name items.price items.quantity  subtotal').exec();
    promise.then(function (orders) {
        console.log(orders[0].items);
    });


    return promise;
}

module.exports = function getOrder(orderId) {
    console.log('db.getorder_id', orderId);
    console.log(orders.find(order => order.orderId === orderId));
    return orders.find(order => order.orderId === orderId);
}

module.exports = function getItems() {
    console.log('items:', items);
    return items;
}

module.exports = function newOrder(orderId, subTotal, items) {
    console.log('orderId:', orderId, '  subtotal:', subTotal);
    let _order = new Order();
    _order.orderId = orderId;
    _order.subtotal = subTotal;
    _order.items = items;
    orders.push(_order);
    return _order;
}
