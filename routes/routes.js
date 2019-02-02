const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const router = express.Router();
const db = require('../models/');
const axios = require('axios');
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
*/

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
		// return the data objet from the response and create each instance in db
		const repos = response.data;
		repos.forEach((repo) => {
			db.Repos
				.create({
					_id: repo.id,
					name: repo.name,
					clone_url: repo.clone_url,
					stargazers_count: repo.stargazers_count,
					topics: repo.topics
				})
				.then((rsp) => {
					console.log(rsp);
				})
				.catch((err) => {
					console.log(err);
				});
		});
	});
});

module.exports = router;
