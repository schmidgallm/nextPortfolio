const PortfolioHero = () => (
	<div className="portfolio">
		<div className="text-content">
			<h1>portfolio</h1>
		</div>
		<style jsx>{`
			.portfolio {
				width: 100%;
				height: 50vh;
				background-color: whitesmoke;
				position: relative;
			}
			.text-content {
				position: absolute;
				top: 50%;
				left: 5%;
				transform: translateY(-50%);
			}
		`}</style>
	</div>
);

export default PortfolioHero;
