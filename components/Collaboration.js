const Collaboration = () => (
	<div className="container my-5 py-5 text-center">
		<h2>Companies Collobrated With:</h2>
		<div className="row mt-5">
			<div className="col-lg-4 col-md-12 col-sm-12 my-3">
				<div className="work text-center">
					<img className="img-fluid img-responsive" src="/static/thumb_1.png" alt="legends furniture logo" />
				</div>
			</div>
			<div className="col-lg-4 col-md-12 col-sm-12 my-3">
				<div className="work text-center">
					<img className="img-fluid img-responsive" src="/static/thumb_2.png" alt="remedy sleep logo" />
				</div>
			</div>
			<div className="col-lg-4 col-md-12 col-sm-12 my-3">
				<div className="work text-center">
					<img className="img-fluid img-responsive" src="/static/thumb_3.png" alt="gdv logo" />
				</div>
			</div>
		</div>

		<style jsx>{`
			h2 {
				display: inline-block;
				border-bottom: 1px solid #9b8650;
			}
			.work {
				width: 100%;
				background-color: whitesmoke;
				padding: 20px;
			}
		`}</style>
	</div>
);

export default Collaboration;
