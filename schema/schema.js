// Dependecies
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull } = graphql;

// TODO
// import db models
// init contact schema
// init graphql root query
// init all mutation

// export graphql schema and pass in rootquery
module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation
});
