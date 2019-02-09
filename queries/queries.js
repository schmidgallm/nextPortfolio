import { gql } from 'graphql-tag';
export const getRepos = gql`
	query getRepos {
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
