import React, { Component } from 'react';
import Topics from './Topics';
import Toggle from './Toggle';

class PortfolioHero extends Component {
	static async getInitialProps() {
		const repos = await this.props;
		return { repos };
	}

	constructor(props) {
		super(props);
		this.state = {
			topics: [],
			customTopics: [ 'React', 'Apollo', 'Node', 'Express', 'MySQL', 'MongoDB', 'Firebase', 'API', 'WebGL' ],
			modal: false
		};
	}

	componentDidMount() {
		// empty array to hold all non duplicate topics
		const topicsArr = [];
		// map props and push topics array in each object if topics does not contain that topic.
		this.props.repos.repos.map((repo) => {
			repo.topics.forEach((topic) => {
				if (topicsArr.includes(topic.name)) {
					// do nothing
				} else {
					topicsArr.push(topic.name);
				}
			});
			return topicsArr.sort();
		});
		// set state to created topicsArr
		this.setState({ topics: topicsArr });
	}

	render() {
		const showAllTopics = () => {
			this.setState({ modal: true });
		};
		return (
			<div className="portfolio container-fluid">
				<div className="title">
					<h1>Portfolio Work</h1>
					<hr />
				</div>
				<div className="topic-list">
					<h4>Popular Work</h4>
					{this.state.customTopics.map((topic) => {
						return (
							<button key={topic} className="btn btn-secondary my-2 mx-2">
								{topic}
							</button>
						);
					})}
				</div>
				<style jsx>{`
					.portfolio {
						margin-top: 100px;
					}
					.topic-span {
						margin: 10px;
						padding: 2px 5px;
						border-bottom: 1px solid black;
					}
					.all-topics {
						display: none;
					}
					.btn-secondary {
						border-color: #9b8650;
						background-color: #9b8650;
					}
					.btn-secondary:hover {
						background-color: #837144;
					}
					.btn-secondary:not(:disabled):not(.disabled):active,
					.btn-secondary:not(:disabled):not(.disabled).active,
					.show > .btn-primary.dropdown-toggl {
						background-color: #9b8650;
						border-color: #837144;
					}
					.btn-secondary:focus,
					.btn-secondary.focus {
						box-shadow: 0 0 0 0.2rem rgba(131, 113, 68, 0.5);
					}
				`}</style>
			</div>
		);
	}
}

export default PortfolioHero;
