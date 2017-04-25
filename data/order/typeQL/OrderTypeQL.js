const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID,
    GraphQLFloat,
    GraphQL
}  = require('graphql');

const ItemTypeQL = require('./ItemTypeQL');
const AddressTypeQL = require('./AddressTypeQL');
const ShippingTypeQL = require('./ShippingTypeQL');

const CustomGraphQLDateType = require('graphql-custom-datetype');

module.exports = new GraphQLObjectType({
    name: 'Order',
    description: 'An order',
    fields: () => ({
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        totalCost: {
            type: new GraphQLNonNull(GraphQLFloat)
        },
        totalRmbCost: {
            type: GraphQLFloat
        },
        orderId: {
            type: new GraphQLNonNull(GraphQLString)
        },
        subtotal: {
            type: new GraphQLNonNull(GraphQLFloat)
        },
        updated: {
            type: new GraphQLNonNull(CustomGraphQLDateType)
        },
        created: {
            type: new GraphQLNonNull(CustomGraphQLDateType)
        },
        status: {
            type: GraphQLString
        },
        items: {
            type: new GraphQLList(ItemTypeQL),
        },
        address: {
            type: AddressTypeQL,
        },
        shipping: {
            type: new GraphQLList(ShippingTypeQL),
        }
    })
});
