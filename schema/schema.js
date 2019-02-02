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
		_id: { type: GraphQLNonNull(GraphQLID) },
		name: { type: GraphQLString },
		company: { type: GraphQLString },
		email: { type: GraphQLString },
		message: { type: GraphQLString }
	})
});

const TopicType = new GraphQLObjectType({
	name: 'Topics',
	fields: () => ({
		name: { type: GraphQLString }
	})
});

// init repo schema
const RepoType = new GraphQLObjectType({
	name: 'Repos',
	fields: () => ({
		_id: { type: GraphQLNonNull(GraphQLID) },
		name: { type: GraphQLString },
		clone_url: { type: GraphQLString },
		stargazers_count: { type: GraphQLInt },
		topics: { type: GraphQLList(TopicType) }
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
		},
		repo: {
			type: RepoType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				// grab data from db here
				return Repos.findById(args.id);
			}
		},
		repos: {
			type: new GraphQLList(RepoType),
			resolve(parent, args) {
				// grab data from db here
				return Repos.find({});
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
