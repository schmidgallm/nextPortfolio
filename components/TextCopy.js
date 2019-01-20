import Link from 'next/link';

const TextCopy = () => (
	<div className="container text-center">
		<div className="text-content">
			<h2>hello there</h2>
			<cite>
				<em>"Obi-Wan Kenobi"</em>
			</cite>
			<p>
				They say if you love what you do then you will never have to work a day in your life. Not untill
				programming did I understand the whole truth in this statement. I love web developemnt and all the wins
				and hardships that go along with it. So please reach out, say hi, ask questions, or just drop some Star
				Wars quotes. My knowlege is for everyone who asks whether it be from spooling up GraphQL servers, AWS
				instances, or who shot first Han or Greedo.
			</p>
			<Link href="/about">
				<a className="btn btn-primary mt-2">More about me</a>
			</Link>
		</div>

		<style jsx>{`
			.text-content {
				background-color: whitesmoke;
				box-sizing: border-box;
				padding: 20vh 0;
				margin-top: 10vh;
			}
			h2 {
				display: inline-block;
				border-bottom: 1px solid #9b8650;
			}
			p {
				width: 75%;
				margin: 30px auto;
			}
			cite {
				display: block;
				margin-left: 50px;
			}
		`}</style>
	</div>
);

export default TextCopy;
