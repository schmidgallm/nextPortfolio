const Footer = () => (
	<div className="container-fluid footer bg-primary mt-4 text-center">
		<div className="row">
			<div className="col-12">
				<div className="footer-copy-position">
					<p className="lead">Michael Schmidgall</p>
					<div className="icons">
						<a className="icon" href="https://github.com/schmidgallm" target="_blank">
							<span>
								<i className="fa fa-github" />
							</span>
						</a>
						<a className="icon" href="https://www.linkedin.com/in/michael-schmidgall/" target="_blank">
							<span>
								<i className="fa fa-linkedin-in" />
							</span>
						</a>
						<a className="icon" href="mailto:schmidgallm.10@gmail.com">
							<span>
								<i className="fa fa-envelope-square" />
							</span>
						</a>
					</div>
				</div>
			</div>
			<div className="col-12 my-5">
				<div className="img-div">
					<img
						src="/static/thumb_portrait.png"
						alt="portrait michael schmidgall"
						className="img-fluid img-responsive"
					/>
				</div>
			</div>
		</div>

		<style jsx>{`
			.container-fluid {
				width: 100%;
				padding: 0;
				margin: 0;
			}
			.footer {
				width: 100%;
				height: max-content;
				padding: 50px;
			}
			.img-div {
				border-radius: 50%;
				overflow: hidden;
				width: 10%;
				margin: 0 auto;
			}
			.footer-copy {
				display: flex;
				flex-direction: column;
				justify-content: center;
			}
			.lead {
				color: #fff;
				font-size: 30px;
			}
			h2 {
				color: #fff;
			}
			i {
				color: #9b8650;
				font-size: 50px;
			}
			a {
				margin: 0 5px;
			}
			.icons {
				margin: 0 auto;
			}
			.icon {
				margin: 0 10px;
			}
			.icon i:hover {
				color: #837144;
			}
			@media all and (max-width: 770px) {
				.img-div {
					float: none;
				}
				.footer-copy-position {
					text-align: center;
				}
				.icons {
					margin: 0 auto;
				}
			}
		`}</style>
	</div>
);

export default Footer;
