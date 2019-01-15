const express = require('express');
const router = express.Router();
const Contacts = require('../models/Contacts');

router.post('/contacts', (req, res) => {
	Contacts.create(req.body)
		.then((response) => {
			console.log(response);
		})
		.catch((error) => {
			console.log(error);
		});
});

module.exports = router;
