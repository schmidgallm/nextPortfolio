import React, { Component } from 'react';

class Contact extends Component {
	state = {
		name: '',
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
		e.preventDefault();
		console.log('hello');

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
			<div className="container my-5">
				<div className="text-content text-center">
					<h2>Contact Me</h2>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<div className="bs-component">
							<form>
								<h4 id="success-message">Message Sent</h4>
								<fieldset>
									<div className="form-group">
										<label htmlFor="name">Name</label>
										<input
											type="text"
											className="form-control"
											id="name"
											placeholder="Enter name"
										/>
									</div>
									<div className="form-group">
										<label htmlFor="company">Company</label>
										<input
											type="text"
											className="form-control"
											id="company"
											placeholder="Enter Company"
										/>
									</div>
									<div className="form-group">
										<label htmlFor="email">Email address</label>
										<input
											type="email"
											className="form-control"
											id="email"
											aria-describedby="emailHelp"
											placeholder="Enter email"
										/>
										<small id="emailHelp" className="form-text text-muted">
											I will never share your email with anyone else.
										</small>
									</div>
									<div className="form-group">
										<label htmlFor="message">Message</label>
										<textarea className="form-control" id="message" rows="3" />
									</div>
									<button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>
										Submit
									</button>
								</fieldset>
							</form>
						</div>
					</div>
				</div>

				<style jsx>{`
					form {
						width: 75%;
						margin: 0 auto;
					}
					.text-content h2 {
						border-bottom: 1px solid #9b8650;
						display: inline-block;
						margin: 20px auto;
					}
					h4 {
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
			</div>
		);
	}
}

export default Contact;
