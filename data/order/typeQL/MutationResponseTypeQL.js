const { GraphQLInt, GraphQLObjectType } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'MutationResponse',
  fields: () => ({
    ok: {
      type: GraphQLInt,
    },
    nModified: {
      type: GraphQLInt,
    },
    n: {
      type: GraphQLInt,
    },
  }),
});
