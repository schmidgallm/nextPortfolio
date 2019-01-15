import Layout from '../components/Layout';
import View from '../components/View';
import Contact from '../components/Contact';

export default () => (
	<Layout>
		<View>
			<div className="contact-container">
				<Contact />
			</div>
		</View>
		<style jsx>{`
			.contact-container {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 75%;
			}
		`}</style>
	</Layout>
);
