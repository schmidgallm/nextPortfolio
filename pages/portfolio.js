import Layout from '../components/Layout';
import View from '../components/View';
import PortfolioHero from '../components/PortfolioHero';
import keys from '../config/keys';
import fetch from 'isomorphic-unfetch';
import axios from 'axios';

class portfolio extends React.Component {
	static async getInitialProps() {
		const response = await fetch(`https://api.github.com/users/schmidgallm/repos`, {
			data: {
				client_id: keys.client_id,
				client_secret: keys.client_secret
			},
			// in order to bring back topics we need to add below header (according to github api docs)
			headers: {
				Accept: 'application/vnd.github.mercy-preview+json'
			}
		});
		const repos = await response.json();
		return { repos: repos };
	}

	render() {
		console.log(this.props);
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

// axios({
// 	method: 'GET',
// 	datatType: 'json',
// 	url: `https://api.github.com/users/schmidgallm/repos`,
// 	data: {
// 		client_id: keys.client_id,
// 		client_secret: keys.client_secret
// 	},
// 	// in order to bring back topics we need to add below header (according to github api docs)
// 	headers: {
// 		Accept: 'application/vnd.github.mercy-preview+json'
// 	}
// }).then((response) => {
// 	const repos = response.data;
// 	return { repos: repos };
// });
