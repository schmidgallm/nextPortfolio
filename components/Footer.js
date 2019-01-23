const Footer = () => (
	<div className="container-fluid footer bg-primary mt-4 text-center">
		<div className="row">
			<div className="col-lg-6 col-md-6 col-sm-12 text-center left">
				<div className="footer-copy">
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
			<div className="col-lg-6 col-md-6 col-sm-12 text-center right">
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
				width: 50%;
				margin: 0 auto;
			}
			.footer-copy {
				height: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
			}
			.left {
				border-right: 1px solid #fff;
			}
			.right {
				border-left: 1px solid #fff;
			}
			.lead {
				color: #fff;
				font-size: 50px;
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
			.icon {
				margin: 0 10px;
			}
			.icon i:hover {
				color: #837144;
			}
			@media all and (max-width: 1200px) {
				.lead {
					font-size: 40px;
				}
			}
			@media all and (max-width: 1200px) {
				.img-div {
					width: 75%;
				}
			}
			@media all and (max-width: 770px) {
				.img-div {
					float: none;
					width: 50%;
				}
				.footer-copy {
					text-align: center;
				}
				.icons {
					margin: 0 auto;
				}
				.right {
					padding: 20px 0;
					border-left: 0;
					border-top: 1px solid #fff;
				}
				.left {
					padding: 20px 0;
					border-right: 0;
					border-bottom: 1px solid #fff;
				}
				.lead {
					font-size: 30px;
				}
			}
		`}</style>
	</div>
);

export default Footer;
