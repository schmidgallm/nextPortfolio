import Layout from '../components/Layout';
import View from '../components/View';
import PortfolioHero from '../components/PortfolioHero';
import fetch from 'isomorphic-fetch';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
	uri: process.env.PORT || 'localhost:3000/graphql'
});

class portfolio extends React.Component {
	static async getInitialProps({ req }) {
		const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
		const response = await fetch(baseUrl + '/repos');
		const data = await response.json();
		return { repos: data };
	}

	render() {
		return (
			<ApolloProvider client={client}>
				<Layout>
					<View>
						<PortfolioHero repos={this.props.repos} />
					</View>
				</Layout>
			</ApolloProvider>
		);
	}
}

export default portfolio;
