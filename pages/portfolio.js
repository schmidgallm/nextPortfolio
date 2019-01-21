import Layout from '../components/Layout';
import View from '../components/View';
import PortfolioHero from '../components/PortfolioHero';
import keys from '../config/keys';
import axios from 'axios';
import React, { Component } from 'react';

class portfolio extends Component {
	state = {
		repos: []
	};

	componentDidMount() {
		// fetch all github repos and push them to state
		axios({
			method: 'GET',
			datatType: 'json',
			url: `https://api.github.com/users/schmidgallm/repos`,
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
			this.setState({
				repos
			});
		});
	}
	render() {
		return (
			<Layout>
				<View>
					<PortfolioHero repos={this.state.repos} />
				</View>
			</Layout>
		);
	}
}

export default portfolio;
