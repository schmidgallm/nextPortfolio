const express = require('express');
const router = express.Router();
const Contacts = require('../models/Contacts');

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

module.exports = router;
