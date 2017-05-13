const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLID,
    GraphQLFloat,
    GraphQLInputObjectType,
} = require('graphql');

module.exports = new GraphQLInputObjectType({
  name: 'ItemInput',
  description: 'An item',
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    url: {
      type: GraphQLString,
    },
    price: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    quantity: {
      type: GraphQLInt,
    },
    subtotal: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    _id: {
      type: GraphQLID,
    },
  }),
});
