import Layout from '../components/Layout';
import View from '../components/View';
import AboutHero from '../components/AboutHero';

export default () => (
	<Layout>
		<View>
			<div className="about-container">
				<AboutHero />
			</div>
		</View>
		<style jsx>{`
			.about-container {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 75%;
			}
		`}</style>
	</Layout>
);
