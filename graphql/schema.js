const { GraphQLSchema, GraphQLObjectType, GraphQLString, buildSchema } = require('graphql');
const gadgetGraphQLType = require('./gadgetType');
const Gadget = require('../model/gadget');


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        gadget: {
            type: gadgetGraphQLType,
            args: {
                id: { type: GraphQLString }
            },
            resolve(parent, args) {
                return Gadget.findById(<a href="http://args.id" class="link link-url" target="_blank" rel="external nofollow noopener noreferrer">args.id</a>)
            }
        }

    }
});

const schema = buildSchema(`
    type Query {
        hello: String
    }
`);

const rootSchema = new GraphQLSchema({
    query: RootQuery
});

module.exports = rootSchema;