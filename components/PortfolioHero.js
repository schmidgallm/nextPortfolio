import React, { Component } from 'react';
import keys from '../config/keys';
import axios from 'axios';

class PortfolioHero extends Component {
	state = {
		repos: []
	};

	componentDidMount() {
		// fetch all github repos and push them to state
		axios({
			method: 'GET',
			datatType: 'json',
			url: `https://api.github.com/users/${keys.user_id}/repos`,
			data: {
				client_id: keys.client_id,
				client_secret: keys.client_secret
			},
			// in order to bring back topics we need to add below header (according to github api docs)
			headers: {
				Accept: 'application/vnd.github.mercy-preview+json'
			}
		}).then((response) => {
			const repos = response.data;
			console.log('response', repos);
			this.setState({
				repos
			});
		});
	}

	render() {
		return (
			<div className="portfolio container">
				hello there
				<style jsx>{`
					.portfolio {
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
					}
				`}</style>
			</div>
		);
	}
}

export default PortfolioHero;
