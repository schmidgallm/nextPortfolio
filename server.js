// Dependencies
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

// init proxy
const devProxy = {
	'/api': {
		target: process.env.PORT || 'localhost:5001',
		pathRewrite: { '^/api': '/' },
		changeOrigin: true
	}
};

// Init App
const PORT = parseInt(process.env.PORT, 10) || 5001;
// const PORT = process.env.PORT || 5001;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Prepare app and start listener on port variable
app.prepare().then(() => {
	const server = express();

	// Set up the proxy.
	if (dev && devProxy) {
		const proxyMiddleware = require('http-proxy-middleware');
		Object.keys(devProxy).forEach(function(context) {
			server.use(proxyMiddleware(context, devProxy[context]));
		});
	}

	// User morgan to log all requests
	server.use(logger('dev'));

	// Body Parser Middleware
	server.use(bodyParser.urlencoded({ extended: true }));
	server.use(bodyParser.json());

	server.get('*', (req, res) => {
		return handle(req, res);
	});

	const routes = require('./routes/routes.js');
	server.use(routes);

	// Connect to MongoDB with MLAB URI
	mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, () => {
		console.log('Now Connected to MongoDB');
	});

	// init db connection then listen for server start in callback
	mongoose.connect(process.env.MONGOLAB_SILVER_URI, { useNewUrlParser: true }, (error) => {
		if (error) throw error;
		console.log('> Connected to Database...');
		server.listen(PORT, (err) => {
			if (err) throw err;
			console.log(`> Ready on http://localhost:${PORT}...`);
		});
	});
});
