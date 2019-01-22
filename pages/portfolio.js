import Layout from '../components/Layout';
import View from '../components/View';
import PortfolioHero from '../components/PortfolioHero';
import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Keys from '../config/keys';

class portfolio extends Component {
	static async getInitialProps() {
		const header = {
			method: 'GET',
			dataType: 'json',
			url: 'https://api.github.com/users/schmmidgallm/repos',
			data: {
				client_id: Keys.client_id,
				client_secret: Keys.client_secret
			},
			headers: {
				Accept: 'application/vnd.github.mercy-preview+json'
			}
		};
		const res = await fetch(header);
		const data = await res.json();
		return { repos: data };
	}
	render() {
		return (
			<Layout>
				<View>
					<PortfolioHero repos={this.props.repos} />
				</View>
			</Layout>
		);
	}
}

export default portfolio;
