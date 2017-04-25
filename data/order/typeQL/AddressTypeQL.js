const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLFloat,
    GraphQLInputObjectType
}  = require('graphql');


module.exports = new GraphQLObjectType({
    name: 'Address',
    fields: () => ({
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        tel: {
            type: GraphQLString
        },
        zip: {
            type: GraphQLString
        },
        weight: {
            type: GraphQLFloat
        },
        address: {
            type: GraphQLString
        },
        ID: {
            type: new GraphQLNonNull(GraphQLString)
        },
    })
});
