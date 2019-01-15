import Link from 'next/link';

const AboutHero = () => (
	<div className="about container">
		<h2>hello there</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis placeat accusantium id neque repellendus sed
			nobis voluptatem tempore saepe reprehenderit vitae voluptates repudiandae at quisquam molestiae impedit
			temporibus dolorum nemo odit, deserunt dicta minus cumque! Esse nulla eveniet suscipit in!
		</p>
		<Link href="/about">
			<a className="btn btn-primary">Contact Me</a>
		</Link>

		<style jsx>{`
			.about {
				text-align: center;
				background-color: whitesmoke;
				box-sizing: border-box;
				padding: 20vh 0;
			}
			h2 {
				display: inline-block;
				border-bottom: 1px solid #9b8650;
				margin: 0;
			}
			p {
				width: 75%;
				margin: 30px auto;
			}
			a {
				margin: 0;
			}
		`}</style>
	</div>
);

export default AboutHero;
