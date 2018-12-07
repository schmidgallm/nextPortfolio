const Footer = () => (
	<div className="container-fluid footer bg-primary mt-4 text-center">
		<div className="row">
			<div className="col-lg-6 col-md-6 col-sm-12">
				<div className="img-div">
					<img
						src="/static/thumb_portrait.png"
						alt="portrait michael schmidgall"
						className="img-fluid img-responsive"
					/>
				</div>
			</div>
			<div className="col-lg-6 col-md-6 col-sm-12 footer-copy">
				<div className="footer-copy-position">
					<p>schmidgallm.10@gmail.com</p>
					<p>linked/linked</p>
					<p>github/github</p>
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
				display: flex;
				flex-direction: column;
				justify-content: center;
			}
			p {
				flex: 1;
			}
			h2 {
				color: #fff;
			}
			@media all and (max-width: 770px) {
				.footer-copy {
					margin-top: 50px;
				}
			}
		`}</style>
	</div>
);

export default Footer;
