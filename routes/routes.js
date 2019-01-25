const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const router = express.Router();
const Contacts = require('../models/Contacts');
const axios = require('axios');

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

router.get('/repos', (req, res) => {
	axios({
		method: 'GET',
		datatType: 'json',
		url: `https://api.github.com/users/${schmidgallm}/repos`,
		data: {
			client_id: process.env.client_id,
			client_secret: process.env.client_secret
		},
		// in order to bring back topics we need to add below header (according to github api docs)
		headers: {
			Accept: 'application/vnd.github.mercy-preview+json'
		}
	}).then((response) => {
		const repos = response.data;
		return res.json(repos);
	});
});
module.exports = router;
