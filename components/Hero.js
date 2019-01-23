import Link from 'next/link';

const Hero = () => (
	<div className="hero-bg">
		<div className="hero-content">
			<h1>Michael Schmidgall</h1>
			<p className="lead">Developer. Mentor. Ethical Programmer</p>
			<hr />
			<Link href="/contact">
				<a className="btn btn-primary">Contact Me</a>
			</Link>
		</div>

		<style jsx>{`
			.hero-bg {
				width: 100%;
				height: 100vh;
				background-image: url('/static/hero_bg.jpeg');
				background-size: cover;
				background-position: center;
				background-repeat: no-repeat;
				position: relative;
			}

			.hero-content {
				position: absolute;
				top: 50%;
				left: 10%;
				transform: translateY(-50%);
			}
			h1,
			p {
				color: #fff;
				text-shadow: 2px 2px 2px #000;
			}
			h1 {
				width: 100%;
				font-size: 3em;
			}
			hr {
				background-color: #fff;
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

export default Hero;
