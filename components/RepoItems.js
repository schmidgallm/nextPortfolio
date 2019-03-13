import React, { Component } from 'react';

class RepoItems extends Component {
	constructor(props) {
		super(props);
		this.state = {
			repoItem: ''
		};
	}

	render() {
		// setState to value of button clicked
		const handleStateChange = (e) => {
			this.setState({ repoItem: e.target.value });
		};

		// put props.repos into variable for easier use
		const repos = this.props.repos.repos.repos;
		// init empty array to hold matching repos based on topic value clicked
		const repoList = [];
		// map through repos variable and if any topic within topics array within repo object matches value of clicked button then push to repoList array
		repos.forEach((repo) => {
			repo.topics.forEach((topic) => {
				if (topic.name === this.state.repoItem) {
					repoList.push(repo);
				}
			});
		});
		return (
			<div className="container-fluid my-5">
				<div className="row port-row">
					{this.props.topics.map((topic) => {
						return (
							<button
								key={topic}
								onClick={handleStateChange}
								value={topic}
								className="btn btn-primary m-2"
							>
								{topic}
							</button>
						);
					})}
				</div>
				<div className="container repoItems">
					<div className="row port-row">
						{repoList.map((repo) => {
							return (
								<div className="col-lg-3 col-md-4 col-sm-6 text-center port-item">
									<i className="fab fa-react" />
									<h4>{repo.name}</h4>
								</div>
							);
						})}
					</div>
				</div>
				<style jsx>{`
					.repoItems {
						margin: 50px auto;
					}
					.row {
						margin: 0 auto;
					}
					.port-row {
						margin: 0 auto;
						display: flex;
						justify-content: center;
					}
					.port-item {
						background-color: whitesmoke;
						padding: 30px 20px;
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

export default RepoItems;
