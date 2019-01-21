import Layout from '../components/Layout';
import View from '../components/View';
import PortfolioHero from '../components/PortfolioHero';
import React, { Component } from 'react';

class portfolio extends Component {
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
