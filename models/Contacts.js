// Dependencies
const mongoose = require('mongoose');

// Save ref to to schema constructor
const Schema = mongoose.Schema;

const ContactsSchema = new Schema({
	name: {
		type: String,
		trim: true,
		validate: [
			(input) => {
				return input.length >= 1;
			}
		],
		required: true
	},
	email: {
		type: String,
		required: true
	},
	message: {
		type: String
	}
});

const Contacts = mongoose.model('contacts', ContactsSchema);

module.exports = Contacts;
