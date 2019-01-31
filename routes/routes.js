const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const router = express.Router();
// const Contacts = require('../models/Contacts');
// const axios = require('axios');
const graphqlHTTP = require('express-graphql');
const schema = require('../schema/schema');

// GraphQL main endpoint
router.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true
	})
);
/*
// post route for all contact form submits. posts to mlab in contact collection
router.post('/post', (req, res) => {
	Contacts.create(req.body)
		.then((response) => {
			console.log(response);
			console.log('made it to router');
		})
		.catch((error) => {
			console.log(error);
		});
});

// get route to call github api and return response to json to /reops so client side can use
// need to use axios and not isomporphic-fetch because we need to pass an object for github api to handle. fetch no likey objects except in callbacks.
router.get('/repos', (req, res) => {
	axios({
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
		// return the data objet from the response and send as json
		const repos = response.data;
		return res.json(repos);
	});
});

// get route to call github api to return topics of each repo
router.get('/repos/topics', (req, res) => {
	axios({
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
		// return the data objet from the response and send as json
		const repos = response.data;
		const allTopics = repos.map((topic) => {
			return topic.topics;
		});
		const topics = [];
		allTopics.forEach((topic) => {
			console.log(topic);
		});
	});
});
*/

module.exports = router;
