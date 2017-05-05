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

const OrderType = require('./typeQL/OrderTypeQL');
const OrderInputType = require('./typeQL/OrderInputTypeQL');
const ShippingInputType = require('./typeQL/ShippingInputTypeQL');
const AddressInputType = require('./typeQL/AddressInputTypeQL');
const ItemInputType = require('./typeQL/ItemInputTypeQL');
const CustomGraphQLDateType = require('graphql-custom-datetype');
const OrderDB = require('./OrderDB');

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
                type: new GraphQLNonNull(CustomGraphQLDateType)
            },
            created: {
                name: 'created',
                type: new GraphQLNonNull(CustomGraphQLDateType)
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
            /*_id: {
                name: '_id',
                type: GraphQLString,
            },
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
                type: new GraphQLNonNull(CustomGraphQLDateType)
            },
            created: {
                name: 'created',
                type: new GraphQLNonNull(CustomGraphQLDateType)
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
            }*/
        },
        // resolve: (root, {_id, totalCost, totalRmbCost, orderId, subtotal, updated, created, status, items, address, shipping}) => {
        resolve: (root, {order}) => {
            console.log('resolve in mutation');
            console.log(order._id);
            // let newOrder = new OrderDB({
            //     _id: _id,
            //     totalCost: totalCost,
            //     totalRmbCost: totalRmbCost,
            //     orderId: orderId,
            //     subtotal: subtotal,
            //     updated: updated,
            //     created: created,
            //     status: status,
            //     items: items,
            //     address: address,
            //     shipping: shipping,
            // });

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

