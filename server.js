// Dependencies
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const Contacts = require('./models/Contacts.js');

// Init App
const PORT = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

// Prepare app and start listener on port variable
app.prepare().then(() => {
	const server = express();

	// User morgan to log all requests
	server.use(logger('dev'));

	// Set static content to public directory
	server.use(express.static(path.join(__dirname, 'static')));

	// Body Parser Middleware
	server.use(bodyParser.urlencoded({ extended: true }));
	server.use(bodyParser.json());

	server.get('/', (req, res) => {
		return app.render(req, res, '/index', req.query);
	});

	server.get('/contacts', (req, res) => {
		return res.json();
	});

	server.post('/contacts', (req, res) => {
		Contacts.create(req.body)
			.then((dbContact) => {
				// Log user post
				console.log(dbContact);
			})
			.catch((err) => {
				console.log(err);
			});
	});

	// Connect to DB
	mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, () => {
		console.log('Now Connected to MongoDB');
	});

	server.listen(PORT, (err) => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${PORT}`);
	});
});
