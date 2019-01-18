import React, { Component } from 'react';
import keys from '../config/keys';
import axios from 'axios';

class PortfolioHero extends Component {
	state = {
		repos: []
	};

	componentDidMount() {
		// fetch all github repos and push them to state
		axios({
			method: 'GET',
			datatType: 'json',
			url: `https://api.github.com/users/${keys.user_id}/repos`,
			data: {
				client_id: keys.client_id,
				client_secret: keys.client_secret
			},
			// in order to bring back topics we need to add below header (according to github api docs)
			headers: {
				Accept: 'application/vnd.github.mercy-preview+json'
			}
		}).then((response) => {
			const repos = response.data;
			console.log(repos);
			this.setState({
				repos
			});
		});
	}

	render() {
		return (
			<div className="portfolio container">
				<div className="row">
					<div className="col-lg-3 col-md-4 col-sm-12">
						<div className="card">
							<img className="card-img-top" src="/static/thumb_2.png" alt="Remedy Sleep Solutions Logo" />
							<div className="card-body">
								<h5 className="card-title">Remedy Sleep Solutions</h5>
								<p className="card-text">
									Mobile friendly informational landing page to target traffic and serve as a remote
									sales tool as well.
								</p>
								<a href="www.remedysleepsolutins.com" target="_blank" className="btn btn-primary">
									See More
								</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-12">
						<div className="card">
							<img className="card-img-top" src="/static/thumb_1.png" alt="Legends Furniture Logo" />
							<div className="card-body">
								<h5 className="card-title">Legends Furniture</h5>
								<p className="card-text">Product Line Splash Screen complete with UI scroll events.</p>
								<br />
								<br />
								<a
									href="https://www.legendsfurniture.com/laurelGroveLandingPage/index.html"
									target="_blank"
									className="btn btn-primary"
								>
									See More
								</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-12">
						<div className="card">
							<img className="card-img-top" src="/static/thumb_3.png" alt="GDV Logo" />
							<div className="card-body">
								<h5 className="card-title">Global Data Visualization</h5>
								<p className="card-text">
									Full stack MERN App using three.js to render a webGL object and map users data on
									screen.
								</p>
								<a href="www.remedysleepsolutins.com" target="_blank" className="btn btn-primary">
									See More
								</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-12">
						<div className="card">
							<img className="card-img-top" src="/static/graphql.png" alt="GraphQL Logo" />
							<div className="card-body">
								<h5 className="card-title">Full Stack GraphQL App</h5>
								<p className="card-text">
									Full stack MERN app with a graphql server running mutations and queries.
								</p>
								<a href="www.remedysleepsolutins.com" target="_blank" className="btn btn-primary">
									See More
								</a>
							</div>
						</div>
					</div>
				</div>
				<style jsx>{`
					.portfolio {
						margin: 100px auto;
					}
				`}</style>
			</div>
		);
	}
}

export default PortfolioHero;
