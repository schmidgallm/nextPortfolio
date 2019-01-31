// Dependecies
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull } = graphql;

// TODO
// import db models
const { Contact, Repos } = require('../models');

// init contact schema
const ContactType = new GraphQLObjectType({
	name: 'Contacts',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		company: { type: GraphQLString },
		email: { type: GraphQLString },
		message: { type: GraphQLString }
	})
});

// init graphql root query
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		contact: {
			type: ContactType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				// grab data from db here
				return Contact.findById(args.id);
			}
		},
		contacts: {
			type: new GraphQLList(ContactType),
			resolve(parent, args) {
				// grab data from db here
				return Contact.find({});
			}
		}
	}
});

// init all mutation

// export graphql schema and pass in rootquery
module.exports = new GraphQLSchema({
	query: RootQuery
	// mutation: Mutation
});
