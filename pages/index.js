import Layout from '../components/Layout';
import View from '../components/View';
import Hero from '../components/Hero';
import TextCopy from '../components/TextCopy';
import CardList from '../components/CardList';
import Collaboration from '../components/Collaboration';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default () => (
	<Layout>
		<View>
			<Hero />
			<CardList />
		</View>
		<View>
			<TextCopy />
		</View>
		<View>
			<Collaboration />
			<Footer />
		</View>
	</Layout>
);
