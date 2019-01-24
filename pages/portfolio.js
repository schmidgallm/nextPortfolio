import Layout from '../components/Layout';
import View from '../components/View';
import PortfolioHero from '../components/PortfolioHero';
import fetch from 'isomorphic-fetch';
import keys from '../config/keys';

class portfolio extends React.Component {
	static async getInitialProps({ req }) {
		const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
		const response = await fetch(baseUrl + '/repos');
		const repos = await response.json();
		return { repos };
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
