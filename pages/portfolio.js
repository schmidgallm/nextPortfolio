import Layout from '../components/Layout';
import View from '../components/View';
import PortfolioHero from '../components/PortfolioHero';
import withData from '../lib/with-apollo-client';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import loadable from '@loadable/component';

// graphql query
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

// loading component to load when ready
// need to use loadable package not react suspense for server side rendering
const LoadingComponent = loadable(() => import('../components/Loading'));

const portfolio = ({ data }) => (
	<Layout>
		<View>
			{console.log(data)}
			{data.loading ? <LoadingComponent /> : <PortfolioHero repos={data} />}
		</View>
	</Layout>
);

const GraphQLIndex = graphql(query)(portfolio);

export default withData(GraphQLIndex);
