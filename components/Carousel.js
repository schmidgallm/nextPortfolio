const Carousel = () => (
	<div id="myCarousel" class="carousel slide" data-ride="carousel">
		<ol class="carousel-indicators">
			<li data-target="#myCarousel" data-slide-to="0" class="active" />
			<li data-target="#myCarousel" data-slide-to="1" />
			<li data-target="#myCarousel" data-slide-to="2" />
		</ol>
		<div class="carousel-inner">
			<div class="carousel-item active">
				<img
					class="first-slide"
					src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
					alt="First slide"
				/>
				<div class="container">
					<div class="carousel-caption text-left">
						<h1>Example headline.</h1>
						<p>
							Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta
							gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
						</p>
						<p>
							<a class="btn btn-lg btn-primary" href="#" role="button">
								Sign up today
							</a>
						</p>
					</div>
				</div>
			</div>
			<div class="carousel-item">
				<img
					class="second-slide"
					src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
					alt="Second slide"
				/>
				<div class="container">
					<div class="carousel-caption">
						<h1>Another example headline.</h1>
						<p>
							Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta
							gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
						</p>
						<p>
							<a class="btn btn-lg btn-primary" href="#" role="button">
								Learn more
							</a>
						</p>
					</div>
				</div>
			</div>
			<div class="carousel-item">
				<img
					class="third-slide"
					src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
					alt="Third slide"
				/>
				<div class="container">
					<div class="carousel-caption text-right">
						<h1>One more for good measure.</h1>
						<p>
							Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta
							gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
						</p>
						<p>
							<a class="btn btn-lg btn-primary" href="#" role="button">
								Browse gallery
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
		<a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
			<span class="carousel-control-prev-icon" aria-hidden="true" />
			<span class="sr-only">Previous</span>
		</a>
		<a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
			<span class="carousel-control-next-icon" aria-hidden="true" />
			<span class="sr-only">Next</span>
		</a>

		<style jsx>{`
			/* Carousel base class */
			.carousel {
				margin-bottom: 4rem;
			}
			/* Since positioning the image, we need to help out the caption */
			.carousel-caption {
				bottom: 3rem;
				z-index: 10;
			}

			/* Declare heights because of positioning of img element */
			.carousel-item {
				height: 32rem;
				background-color: #777;
			}
			.carousel-item > img {
				position: absolute;
				top: 0;
				left: 0;
				min-width: 100%;
				height: 32rem;
			}
		`}</style>
	</div>
);

export default Carousel;
