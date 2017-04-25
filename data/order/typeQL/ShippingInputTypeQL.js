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


module.exports = new GraphQLInputObjectType({
    name: 'ShippingInput',
    fields: () => ({
        no: {
            type: new GraphQLNonNull(GraphQLString)
        },
        url: {
            type: GraphQLString
        },
        status: {
            type: GraphQLString
        },
    })
});
