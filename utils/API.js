import axios from 'axios';

export default {
	postContact: (newContact) => {
		console.log('api function got here');
		console.log('new contact', newContact);
		return axios({
			method: 'POST',
			url: '/post',
			data: newContact
		})
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			});
	}
};
