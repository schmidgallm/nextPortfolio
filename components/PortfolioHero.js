import React, { Component } from 'react';

class PortfolioHero extends Component {
	static async getInitialProps() {
		const repos = await this.props;
		return { repos };
	}

	constructor(props) {
		super(props);
		this.state = {
			topics: []
		};
		// empty array to hold all non duplicate topics
		const topics = [];
		// map props and push topics array in each object if topics does not contain that topic.
		const repos = this.props.repos.repos.map((repo) => {
			repo.topics.forEach((topic) => {
				if (topics.includes(topic.name)) {
					// do nothing
				} else {
					topics.push(topic.name);
				}
			});
			return topics;
		});

		console.log('topics', topics);

		// at this moment component has not yet mounted so we cannot setState.
	}

	render() {
		return (
			<div className="portfolio container-fluid">
				{console.log(this.props.repos)}
				<div className="row">
					<div className="col col-2 topic-nav">
						<div className="logo">
							<p>Portfolio</p>
						</div>
					</div>
					<div className="col col-3">
						<p>test</p>
					</div>
					<div className="col col-7">
						<p>test</p>
					</div>
				</div>
				<style jsx>{`
					.portfolio {
						margin-top: 100px;
						height: calc(100vh - 100px);
					}
					.col {
						margin: 0;
						padding: 0;
						height: calc(100vh - 100px);
					}
					.topic-nav {
						background-color: whitesmoke;
					}
					.logo {
						border-bottom: 1px solid black;
					}
				`}</style>
			</div>
		);
	}
}

export default PortfolioHero;
