const {
    GraphQLList,
    GraphQLString,
    GraphQLInt,
} = require('graphql');

const OrderType = require('./typeQL/OrderTypeQL');
const OrderDB = require('./OrderDB');

module.exports = {
  orders: {
    type: new GraphQLList(OrderType),
    resolve: OrderDB.getOrders,
    args: {
      offset: {
        type: GraphQLInt,
      },
      limit: {
        type: GraphQLInt,
      },
    },
  },
  viewer: {
    type: new GraphQLList(OrderType),
    resolve: OrderDB.getViewer,
  },
  order: {
    type: OrderType,
    args: {
      orderId: {
        type: GraphQLString,
      },
    },
    resolve: OrderDB.getOrder,
  },
};
