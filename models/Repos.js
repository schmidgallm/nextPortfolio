// Dependencies
const mongoose = require('mongoose');

// Save ref to to schema constructor
const Schema = mongoose.Schema;

const RepoSchema = new Schema({
	_id: {
		type: Number,
		required: true
	},
	name: {
		type: String
	},
	clone_url: {
		type: String,
		required: true
	},
	stargazers_count: {
		type: Number
	},
	topics: {
		type: Array,
		// validate function to only give db access to topics arrays that have length of greater than 0
		validate: [
			(val) => {
				return val.length > 0;
			}
		],
		required: true
	}
});
const Repos = mongoose.model('repos', RepoSchema);

module.exports = Repos;
