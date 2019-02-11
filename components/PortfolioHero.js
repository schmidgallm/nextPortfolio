import React, { Component } from 'react';

class PortfolioHero extends Component {
	static async getInitialProps() {
		const repos = await this.props;
		return { repos };
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
