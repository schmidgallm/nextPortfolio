import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => {
	NProgress.start();
};
Router.onRouteChangeComplete = () => {
	NProgress.done();
};

const AboutHero = () => (
	<div className="about-wrapper">
		<div className="row">
			<div className="col-lg-6 col-md-6 col-sm-12">
				<div className="img-container">
					<img className="img-responsive img-fluid" src="/static/thumb_portrait.png" />
				</div>
			</div>
			<div className="col-lg-6 col-md-6 col-sm-12 mt-5">
				<div className="about-content">
					<h4>Developer. Mentor. Business Intellegint</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, impedit sapiente ipsam culpa
						totam repudiandae autem, corporis perspiciatis eaque doloribus veritatis commodi voluptas,
						cumque reiciendis officia tenetur explicabo deserunt numquam nulla praesentium. Tenetur quos
						corrupti numquam similique optio molestias nobis id praesentium quia veniam! Optio cum cumque
						quidem dicta officiis.
					</p>
					<Link href="/contact">
						<a className="btn btn-primary">Contact Me</a>
					</Link>
				</div>
			</div>
		</div>
		<style jsx>{`
			.about-wrapper {
				margin-top: 100px;
			}
			h2 {
				display: inline-block;
				border-bottom: 1px solid #9b8650;
			}
			.img-container {
				width: 75%;
				margin: 0 auto;
			}
			img {
				width: 100%;
				margin: 0 auto;
			}
			.about-content {
				width: 75%;
				margin: 0 auto;
			}
		`}</style>
	</div>
);

export default AboutHero;
