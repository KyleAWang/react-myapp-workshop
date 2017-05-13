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
    GraphQLInputObjectType,
} = require('graphql');

const ShippingInputType = require('./ShippingInputTypeQL');
const AddressInputType = require('./AddressInputTypeQL');
const ItemInputType = require('./ItemInputTypeQL');

const GraphQLDate = require('graphql-date');

module.exports = new GraphQLInputObjectType({
  name: 'OrderInput',
  description: 'An order',
  fields: () => ({
    _id: {
      type: GraphQLID,
    },
    totalCost: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    totalRmbCost: {
      type: GraphQLFloat,
    },
    orderId: {
      type: new GraphQLNonNull(GraphQLString),
    },
    subtotal: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    updated: {
      type: GraphQLDate,
    },
    created: {
      type: GraphQLDate,
    },
    status: {
      type: GraphQLString,
    },
    items: {
      type: new GraphQLList(ItemInputType),
    },
    address: {
      type: AddressInputType,
    },
    shipping: {
      type: new GraphQLList(ShippingInputType),
    },
  }),
});
