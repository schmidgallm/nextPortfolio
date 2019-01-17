import Link from 'next/link';

const AboutHero = () => (
	<div className="container text-center">
		<div className="text-content">
			<h2>About Me</h2>
			<p>
				Graduated from Arizona State University where I studied historical research. After graduation I started
				as a business analysists developing custom SQL scripts along with MSAccess applications and Power BI
				dashboards. Quite a jump from historical research but relativlily the same. Both involved quite a bit of
				research before implementing anything.
			</p>
			<p>
				Not long after that I was thrusted into web development creating little splash pages. It didnt take long
				but I fell in love with programming afgter my first script. From there I took on to a full time Web
				Developer
			</p>
			<p>
				Soon enough I decided to get more of a classical education in it where I attended and graduated from
				University of Arizona Coding Bootcamp. After graduation my skill set nearly trippled
			</p>
			<Link href="/about">
				<a className="btn btn-primary mt-2">More about me</a>
			</Link>
		</div>

		<style jsx>{`
			.text-content {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				background-color: whitesmoke;
				padding: 10vh 0;
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

export default AboutHero;
