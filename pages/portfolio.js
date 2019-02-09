import Layout from '../components/Layout';
import View from '../components/View';
import PortfolioHero from '../components/PortfolioHero';
import withData from '../lib/with-apollo-client';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const query = gql`
	{
		repos {
			name
			description
			clone_url
			stargazers_count
			homepage
			topics {
				name
			}
		}
	}
`;

const portfolio = (props) => (
	<Layout>
		<View>
			{console.log(props.data)}
			<PortfolioHero />
		</View>
	</Layout>
);

const GraphQLIndex = graphql(query)(portfolio);

export default withData(GraphQLIndex);
