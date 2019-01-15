import Link from 'next/link';

const Collaboration = () => (
	<div className="container my-5 text-center">
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
			<div className="col-12 mt-5">
				<Link href="/portfolio">
					<a className="btn btn-primary">More Work</a>
				</Link>
			</div>
		</div>

		<style jsx>{`
			.container {
				padding: 10vh 0;
			}
			h2 {
				display: inline-block;
				border-bottom: 1px solid #9b8650;
			}
			.work {
				width: 100%;
				background-color: whitesmoke;
				padding: 20px;
			}
			.btn {
				background-color: #9b8650;
				border-radius: 10px;
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

export default Collaboration;
