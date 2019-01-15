import React, { Component } from 'react';

class CardList extends Component {
	componentDidMount() {
		// set each card to slideinleft after each one is done
	}

	render() {
		return (
			<div className="card-list text-center">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-12 col-sm-12 animated">
							<div className="card">
								<i className="fa fa-code card-image-top" />
								<div className="card-body">
									<h5 className="card-title">Developer</h5>
									<p>
										I am a full stack developer who values in clean, dry, tested, and resusable
										code.
									</p>
									<p className="card-text">Stuff I Love:</p>
									<span>
										React, React-Native, GraphQL, Next.js, PHP, WordPress, Node.js, Express,
										MongoDB, SQL
									</span>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-12 col-sm-12 animated">
							<div className="card">
								<i className="fa fa-graduation-cap card-image-top" />
								<div className="card-body">
									<h5 className="card-title">Mentor</h5>
									<p>
										Programming is my passion. I love sharing my knowledge with anyone who wants to
										learn.
									</p>
									<p className="card-text">Where I Teach:</p>
									<span>
										Teaching Assistant for Full Stack Developer Students for Univserity of Arizona
									</span>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-12 col-sm-12 animated">
							<div className="card">
								<i className="fa fa-database card-image-top" />
								<div className="card-body">
									<h5 className="card-title">Business Intelligent</h5>
									<p>
										I have had the lucky opportunity to work on some amazing projects, but along the
										way I have become profficient in the business side of things.
									</p>
									<p className="card-text">Stuff I Love:</p>
									<span>SQL, PostgreSQL, MongoDB, MS Accesss</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<style jsx>{`
					.card-list {
						margin-top: -75px;
					}
					.card {
						padding: 30px 0;
						margin: 20px 0;
						box-shadow: 1px 1px 5px #9b8650;
					}
					h5 {
						display: inline-block;
						border-bottom: 1px solid #9b8650;
					}
					i {
						color: #9b8650;
						font-size: 30px;
					}
				`}</style>
			</div>
		);
	}
}

export default CardList;
