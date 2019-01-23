import Layout from '../components/Layout';
import View from '../components/View';
import PortfolioHero from '../components/PortfolioHero';
import fetch from 'isomorphic-unfetch';

class portfolio extends React.Component {
	static async getInitialProps() {
		const response = await fetch(`https://api.github.com/users/schmidgallm/repos`);
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
