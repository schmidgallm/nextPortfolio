const Hero = () => (
	<div className="container-fluid hero">
		<div className="hero-bg">
			<div className="hero-content">
				<h1>Michael Schmidgall</h1>
				<p>Developer. Designer. Buisness Intelligent</p>
				<button className="btn btn-primary">Contact Me</button>
			</div>
		</div>
		<style jsx>{`
			.hero {
				background-image: url('/static/hero_bg.jpeg');
				background-repeat: no-repeat;
				background-size: cover;
				background-position: center;
				height: 65vh;
				position: relative;
			}

			.hero-content {
				position: absolute;
				top: 50%;
				left: 10%;
				transform: translateY(-50%);
				color: #fff;
			}
			h1 {
				color: #fff;
				font-size: 3em;
			}
		`}</style>
	</div>
);

export default Hero;
