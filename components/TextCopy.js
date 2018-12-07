const TextCopy = () => (
	<div className="container text-center mt-5">
		<div className="text-content">
			<h2>hello there</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis placeat accusantium id neque repellendus
				sed nobis voluptatem tempore saepe reprehenderit vitae voluptates repudiandae at quisquam molestiae
				impedit temporibus dolorum nemo odit, deserunt dicta minus cumque! Esse nulla eveniet suscipit in!
			</p>
		</div>

		<style jsx>{`
			.text-content {
				box-sizing: border-box;
				padding: 7vh 0;
			}
			h2 {
				display: inline-block;
				border-bottom: 1px solid #9b8650;
			}
		`}</style>
	</div>
);

export default TextCopy;
