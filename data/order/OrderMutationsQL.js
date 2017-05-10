const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID,
    GraphQLFloat,
    GraphQL,
    GraphQLInputObjectType
}  = require('graphql');
const GraphQLDate = require('graphql-date');

const OrderType = require('./typeQL/OrderTypeQL');
const OrderInputType = require('./typeQL/OrderInputTypeQL');
const ShippingInputType = require('./typeQL/ShippingInputTypeQL');
const AddressInputType = require('./typeQL/AddressInputTypeQL');
const ItemInputType = require('./typeQL/ItemInputTypeQL');
const OrderDB = require('./OrderDB');
const MutationResponseTypeQL = require('./typeQL/MutationResponseTypeQL.js');

module.exports = {
    addOrder: {
        type: OrderType,
        args: {
            totalCost: {
                name: 'totalCost',
                type: new GraphQLNonNull(GraphQLFloat)
            },
            totalRmbCost: {
                name: 'totalRmbCost',
                type: GraphQLFloat
            },
            orderId: {
                name: 'orderId',
                type: new GraphQLNonNull(GraphQLString)
            },
            subtotal: {
                name: 'subtotal',
                type: new GraphQLNonNull(GraphQLFloat)
            },
            updated: {
                name: 'updated',
                type: new GraphQLNonNull(GraphQLDate)
            },
            created: {
                name: 'created',
                type: new GraphQLNonNull(GraphQLDate)
            },
            status: {
                name: 'status',
                type: GraphQLString
            },
            items: {
                name: 'items',
                type: new GraphQLList(ItemInputType),
            },
            address: {
                name: 'address',
                type: AddressInputType,
            },
            shipping: {
                name: 'shipping',
                type: new GraphQLList(ShippingInputType),
            }
        },
        resolve: (root, {totalCost, totalRmbCost, orderId, subtotal, updated, created, status, items, address, shipping}) => {
            console.log('resolve in mutation');
            console.log(totalCost, totalRmbCost, orderId, subtotal, updated, created, status, items, address, shipping);
            let newOrder = new OrderDB({
                totalCost: totalCost,
                totalRmbCost: totalRmbCost,
                orderId: orderId,
                subtotal: subtotal,
                updated: updated,
                created: created,
                status: status,
                items: items,
                address: address,
                shipping: shipping,
            });

            return new Promise((resolve, reject) => {
                console.log('save now...');
                newOrder.save((err, res) => {
                    console.log('done saving...');
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(res);
                    }
                    err ? reject(err) : resolve(res);
                })
            })

        }
    },
    updateOrder: {
        type: OrderType,
        args: {
            order: {
                name: 'input',
                type: OrderInputType,
            },
        },
        resolve: (root, {order}) => {
            console.log('resolve in mutation');
            console.log(order._id);

            return new Promise((resolve, reject) => {
                console.log('save now...');
                OrderDB.update({_id: order._id}, order, (err, res)=> {
                    console.log('done saving...');
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(res);
                    }
                    err ? reject(err) : resolve(order);
                });
            })

        }
    }
};

