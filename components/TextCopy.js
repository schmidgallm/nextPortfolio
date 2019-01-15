import Link from 'next/link';

const TextCopy = () => (
	<div className="container text-center">
		<div className="text-content">
			<h2>hello there</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis placeat accusantium id neque repellendus
				sed nobis voluptatem tempore saepe reprehenderit vitae voluptates repudiandae at quisquam molestiae
				impedit temporibus dolorum nemo odit, deserunt dicta minus cumque! Esse nulla eveniet suscipit in!
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
		`}</style>
	</div>
);

export default TextCopy;
