import Link from 'next/link';

const AboutHero = () => (
	<div className="about container text-center">
		<h2 className="my-4">About Me</h2>
		<div className="row">
			<div className="col-6 text-right">
				<h4>ASU Grad</h4>
			</div>
			<div className="col-6 text-left">
				<p>
					Recieved Bachelor of Arts from ASU. Here I focused in historical reasearch and quickly found my love
					for learning and discovering.
				</p>
			</div>
		</div>
		<div className="row">
			<div className="col-6 text-right">
				<p>
					Developed custom SQL reporting scripts, MSAccess applications, and PowerBI dashboards. Here I also
					became thrusted into a web developer role as well.
				</p>
			</div>
			<div className="col-6 text-left">
				<h4>Buisness Analystis</h4>
			</div>
		</div>
		<div className="row">
			<div className="col-6 text-right">
				<h4>Front End Developer</h4>
			</div>
			<div className="col-6 text-left">
				<p>
					Once I transitioned out of buisness analystis and into a web developer position, I quickly found how
					much similiar it was to historical research. Finding answers to questions, searching stack overflow,
					etc.
				</p>
			</div>
		</div>
		<div className="row">
			<div className="col-6 text-right">
				<p>
					I wanted to keep pushing my knowledge of web development and take a more classical learning approach
					to it. I learned more how to be a developer in six months than my two years of on work experience.
				</p>
			</div>
			<div className="col-6 text-left">
				<h4>Full Stack Dev Bootcamp Graduation</h4>
			</div>
		</div>
		<div className="row">
			<div className="col-6 text-right">
				<h4>Director of E-Commerce Development</h4>
			</div>
			<div className="col-6 text-left">
				<p>
					After about four years of develpoment I took the lead role of E-Commerce development. Lead
					development of two Mobile Apps using React-Native and several Web Apps using Electron.
				</p>
			</div>
		</div>
		<style jsx>{`
			.about {
				margin-top: 100px;
				width: 50%;
			}
			.text-left {
				border-left: 1px solid #9b8650;
			}
			.text-right {
				border-right: 1px solid #9b8650;
			}
			h4 {
				color: #9b8650;
			}
		`}</style>
	</div>
);

export default AboutHero;
