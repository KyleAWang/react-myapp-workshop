const {
    GraphQLScalarType,
} = require('graphql');

const { GraphQLError } = require('graphql/error');
const { Kind } = require('graphql/language');

const ValidateStringType = (params) => new GraphQLScalarType({
  name: params.name,
  serialize: (value) => value,
  parseValue: (value) => value,
  parseLiteral: (ast) => {
    if (ast.kind !== Kind.STRING) {
      throw new GraphQLError(`Query error: Can only parse strings got a: ${ast.kind}`, [ast]);
    }
    if (ast.value.length < params.min) {
      throw new GraphQLError(`Query error: minimum length of ${params.min} required: `, [ast]);
    }
    if (ast.value.length > params.max) {
      throw new GraphQLError(`Query error: maximum length is ${params.max}: `, [ast]);
    }
    if (params.regex !== null) {
      if (!params.regex.test(ast.value)) {
        throw new GraphQLError(`Query error: Not a valid ${params.name}: `, [ast]);
      }
    }
    return ast.value;
  },
});


module.exports = new ValidateStringType({
  name: 'Email',
  min: 4,
  max: 254,
  regex: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
});
