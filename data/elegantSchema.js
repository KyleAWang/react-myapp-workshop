const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID,
} = require('graphql');

const {
    OrderQueries,
    OrderMutations,
} = require('./order/OrderQL');


// const RootQuery = new GraphQLObjectType({
//     name: 'Query',
//     fields: () => ({
//         orders: OrderQueries.orders
//     })
// });

const RootQuery = new GraphQLObjectType({
  name: 'Root',
  fields: {
    orders: OrderQueries.orders,
    order: OrderQueries.order,
  },
});

const RootMutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    addOrder: OrderMutations.addOrder,
    updateOrder: OrderMutations.updateOrder,
  }),
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});

module.exports.schema = schema;
