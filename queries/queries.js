import { gql } from 'graphql-tag';
const getRepos = gql`
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

export { getRepos };
