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
		return (
			<div className="portfolio container-fluid">
				{console.log(this.props.repos)}
				<div className="row">
					<div className="topic-nav bg-primary">
						<div className="inner">
							<p>Portfolio</p>
							<hr />
							{this.state.topics.map((topic) => {
								return <p className="topic">{topic}</p>;
							})}
						</div>
					</div>
					<div className="copy">
						<div className="inner">
							<h3>Hello World</h3>
							<hr />
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi inventore veritatis
								voluptas excepturi! Dolore ducimus itaque, autem aut distinctio nemo.
							</p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi inventore veritatis
							voluptas excepturi! Dolore ducimus itaque, autem aut distinctio nemo.
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi inventore veritatis
								voluptas excepturi! Dolore ducimus itaque, autem aut distinctio nemo.Lorem ipsum dolor,
								sit amet consectetur adipisicing elit. Animi inventore veritatis voluptas excepturi!
								Dolore ducimus itaque, autem aut distinctio nemo.
							</p>
						</div>
					</div>
					<div className="showcase">
						<div className="inner">
							<h1>Recent Work</h1>
						</div>
					</div>
				</div>
				<style jsx>{`
					.portfolio {
						margin-top: 100px;
						height: calc(100vh - 100px);
					}
					.topic-nav,
					.copy,
					.showcase {
						margin: 0;
						padding: 0;
						height: calc(100vh - 100px);
					}
					.topic-nav {
						width: 10%;
					}
					.topic {
						display: inline-block;
						background-color: white;
						margin: 2px;
						color: black;
					}
					.copy {
						background-color: whitesmoke;
						width: 20%;
					}
					.inner {
						margin: 20px;
					}
					.showcase {
						width: 70%;
					}
				`}</style>
			</div>
		);
	}
}

export default PortfolioHero;
