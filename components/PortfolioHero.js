import React, { Component } from 'react';
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
			url: `https://api.github.com/users/${process.env.user_id}/repos`,
			data: {
				client_id: process.env.client_id,
				client_secret: process.env.client_secret
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
					<div className="col-lg-3 col-md-4 col-sm-6 text-center port-item">
						<i className="fab fa-react" />
						<h4>React</h4>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 text-center port-item">
						<i className="fab fa-react" />
						<h4>GraphQL</h4>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 text-center port-item">
						<i className="fab fa-node-js" />
						<h4>Node</h4>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 text-center port-item">
						<i className="fab fa-react" />
						<h4>React-Native</h4>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 text-center port-item">
						<i className="fab fa-aws" />
						<h4>DevOps</h4>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 text-center port-item">
						<i className="fab fa-react" />
						<h4>Next</h4>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 text-center port-item">
						<i className="fas fa-database" />
						<h4>MySQL</h4>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 text-center port-item">
						<i className="fas fa-database" />
						<h4>MongoDB</h4>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 text-center port-item">
						<i className="fab fa-node-js" />
						<h4>Electron</h4>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 text-center port-item">
						<i className="fab fa-js" />
						<h4>Express</h4>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 text-center port-item">
						<i className="fab fa-js" />
						<h4>API Development</h4>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 text-center port-item">
						<i className="fab fa-js" />
						<h4>Jquery</h4>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 text-center port-item">
						<i className="fas fa-fire" />
						<h4>Firebase</h4>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 text-center port-item">
						<i className="fab fa-js" />
						<h4>ThreeJS</h4>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 text-center port-item">
						<i className="fab fa-js" />
						<h4>AJAX</h4>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 text-center port-item">
						<i className="fab fa-js" />
						<h4>HandleBars</h4>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 text-center port-item">
						<i className="fab fa-wordpress" />
						<h4>WordPress</h4>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 text-center port-item">
						<i className="fas fa-mobile-alt" />
						<h4>Responsive-Design</h4>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 text-center port-item">
						<i className="fab fa-css3-alt" />
						<h4>CSS / Styled Components</h4>
					</div>
				</div>
				<style jsx>{`
					.portfolio {
						margin: 100px auto;
					}
					.port-item {
						background-color: whitesmoke;
						padding: 20px;
						cursor: pointer;
						margin: 10px;
						border: 1px solid #9b8650;
					}
					.port-item:hover {
						background-color: #9b8650;
					}
					i {
						font-size: 25px;
						color: black;
					}
				`}</style>
			</div>
		);
	}
}

export default PortfolioHero;
