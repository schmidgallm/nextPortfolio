import Layout from '../components/Layout';
import View from '../components/View';
import API from '../utils/API';

import React, { Component } from 'react';

class contact extends Component {
	state = {
		name: '',
		company: '',
		email: '',
		message: ''
	};

	// setState when user types inputs
	handleInputChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	// submit form to database
	handleSubmit = (e) => {
		// prevent form from submitting
		e.preventDefault();
		console.log(this.state);
		API.postContact(this.state);

		// show success message if message successfully sent
		document.querySelector('#success-message').style.display = 'block';
		document.querySelector('#success-message').classList.add('animated', 'slideInLeft');
	};

	// onload ui
	componentDidMount() {
		// hide success message on mount
		// show message on handleSubmit function
		document.querySelector('#success-message').style.display = 'none';
	}

	render() {
		return (
			<Layout>
				<View>
					<div className="contact-container">
						<div className="container" id="contact-me">
							<div className="text-content text-center">
								<h2>Contact Me</h2>
							</div>
							<div className="row">
								<div className="col-lg-12">
									<div className="bs-component">
										<form onSubmit={this.handleSubmit}>
											<h3 id="success-message">Message Sent</h3>
											<fieldset>
												<div className="form-group">
													<label htmlFor="name">Name</label>
													<input
														name="name"
														type="text"
														className="form-control"
														id="name"
														placeholder="Enter name"
														onChange={this.handleInputChange}
														value={this.state.name}
													/>
												</div>
												<div className="form-group">
													<label htmlFor="company">Company</label>
													<input
														name="company"
														type="text"
														className="form-control"
														id="company"
														placeholder="Enter Company"
														onChange={this.handleInputChange}
														value={this.state.company}
													/>
												</div>
												<div className="form-group">
													<label htmlFor="email">Email address</label>
													<input
														name="email"
														type="email"
														className="form-control"
														id="email"
														aria-describedby="emailHelp"
														placeholder="Enter email"
														onChange={this.handleInputChange}
														value={this.state.email}
													/>
													<small id="emailHelp" className="form-text text-muted">
														I will never share your email with anyone else.
													</small>
												</div>
												<div className="form-group">
													<label htmlFor="message">Message</label>
													<textarea
														name="message"
														className="form-control"
														id="message"
														rows="3"
														value={this.state.message}
														onChange={this.handleInputChange}
													/>
												</div>
												<button
													type="submit"
													className="btn btn-primary"
													onClick={this.handleSubmit}
												>
													Submit
												</button>
											</fieldset>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</View>
				<style jsx>{`
					.contact-container {
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						width: 75%;
					}
					#contact-me {
						margin: 100px auto;
						margin-bottom: 50px;
					}
					form {
						width: 75%;
						margin: 0 auto;
					}
					@media only screen and (max-width: 600px) {
						form {
							width: 100%;
						}
					}
					.text-content h2 {
						border-bottom: 1px solid #9b8650;
						display: inline-block;
						margin: 20px auto;
					}
					h3 {
						color: #9b8650;
					}
					.btn {
						background-color: #9b8650;
						border-radius: 10px;
						width: 100%;
					}
					.btn-primary {
						border-color: #9b8650;
					}
					.btn:hover {
						background-color: #837144;
					}
					.btn-primary:not(:disabled):not(.disabled):active,
					.btn-primary:not(:disabled):not(.disabled).active,
					.show > .btn-primary.dropdown-toggl {
						background-color: #9b8650;
						border-color: #837144;
					}
					.btn-primary:focus,
					.btn-primary.focus {
						box-shadow: 0 0 0 0.2rem rgba(131, 113, 68, 0.5);
					}
				`}</style>
			</Layout>
		);
	}
}

export default contact;
