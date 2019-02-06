import Layout from '../components/Layout';
import View from '../components/View';
import PortfolioHero from '../components/PortfolioHero';
import fetch from 'isomorphic-fetch';
import { graphql } from 'react-apollo';
import getRepos from '../queries/queries';

class portfolio extends React.Component {
	static async getInitialProps({ req }) {
		const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
		const response = await fetch(baseUrl + '/repos');
		const data = await response.json();
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

export default graphql(getRepos)(portfolio);
