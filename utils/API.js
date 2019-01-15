import axios from 'axios';

export default {
	postContact: (newContact) => {
		return axios.post('/contacts', newContact);
	}
};
