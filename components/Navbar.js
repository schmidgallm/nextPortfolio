import Link from 'next/link';

const Navbar = () => (
	<div className="bs-component">
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Link href="/">
				<a className="navbar-brand">Michael Schmidgall</a>
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarColor01"
				aria-controls="navbarColor01"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>

			<div className="collapse navbar-collapse" id="navbarColor01">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<Link href="/about">
							<a className="nav-link">About</a>
						</Link>
					</li>
					<li className="nav-item">
						<Link href="/contact">
							<a className="nav-link">Contact</a>
						</Link>
					</li>
					<li className="nav-item">
						<Link href="portfolio">
							<a className="nav-link">Portfolio</a>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
		<style jsx>{`
			.navbar {
				border: none;
			}
		`}</style>
	</div>
);

export default Navbar;
