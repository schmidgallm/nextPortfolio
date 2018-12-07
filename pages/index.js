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
			<TextCopy />
		</View>
		<View>
			<CardList />
		</View>
		<View>
			<Collaboration />
			<Contact />
			<Footer />
		</View>
	</Layout>
);
