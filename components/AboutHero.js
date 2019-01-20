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
					<h4>Developer. Mentor. Ethical Progammer</h4>
					<p>
						Arizona State Univeristy where I graduated with a BA, I focused in historical research. After
						graduation, I started work as a business analysist where I developed custom SQL reports, created
						MSAccess applications, and created Microsoft PowerBI dashboards. I was surprised historical
						research and SQL scripts were so similar. Not in the final product but in the learning and
						research to accomplish your goal. Soon after I started to get my feet wet in web developemnt
						where I soon landed my first position as a front end developer. I wanted to go back to school to
						get a more classical learning approach and take a deep dive into web development. I then
						enrolled and graduated from a coding bootcamp under Univeristy of Arizona where my skills in not
						ony development, but the ability to learn and problem solve were increased extremely quickly.
						Soon after I took a more complex role developing full stack desktop and mobile applications.
						Programming is something I truly love and no longer do I ever have to feel like I am working for
						a living.
					</p>
					<Link href="/contact">
						<a className="btn btn-primary">Contact Me</a>
					</Link>
				</div>
			</div>
		</div>
		<style jsx>{`
			.about-wrapper {
				margin: 100px auto;
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
