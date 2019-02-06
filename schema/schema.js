// Dependecies
const dotenv = require('dotenv');
dotenv.config();
const graphql = require('graphql');
const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLSchema,
	GraphQLID,
	GraphQLInt,
	GraphQLList,
	GraphQLNonNull,
	GraphQLEnumType
} = graphql;
const axios = require('axios');

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
	name: 'Topic',
	fields: () => ({
		name: {
			type: GraphQLString,
			resolve(obj) {
				console.log(obj);
				return obj;
			}
		}
	})
});

// init repo schema
const RepoType = new GraphQLObjectType({
	name: 'Repos',
	fields: () => ({
		_id: { type: GraphQLNonNull(GraphQLID) },
		name: { type: GraphQLString },
		description: { type: GraphQLString },
		clone_url: { type: GraphQLString },
		stargazers_count: { type: GraphQLInt },
		homepage: { type: GraphQLString },
		topics: {
			type: GraphQLList(TopicType)
		}
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
				// fetch from api
				return axios({
					method: 'GET',
					datatType: 'json',
					url: `https://api.github.com/users/${process.env.user_id}/repos`,
					data: {
						client_id: process.env.client_id,
						client_secret: process.env.client_secret
					},
					// github api needs below header in order to bring back repo topics
					headers: {
						Accept: 'application/vnd.github.mercy-preview+json'
					}
				}).then((response) => {
					const repos = response.data.filter((repo) => repo.topics.length != 0);
					return (repos.id = args.id);
				});
			}
		},
		repos: {
			type: new GraphQLList(RepoType),
			resolve(parent, args) {
				// fetch from api
				return axios({
					method: 'GET',
					datatType: 'json',
					url: `https://api.github.com/users/${process.env.user_id}/repos`,
					data: {
						client_id: process.env.client_id,
						client_secret: process.env.client_secret
					},
					// github api needs below header in order to bring back repo topics
					headers: {
						Accept: 'application/vnd.github.mercy-preview+json'
					}
				}).then((response) => {
					return response.data.filter((repo) => repo.topics.length != 0);
				});
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
