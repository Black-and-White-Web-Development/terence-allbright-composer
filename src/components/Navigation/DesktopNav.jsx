import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import "./DesktopNav.scss";

const DesktopNav = function ({ routes }) {
	return (
		<header className="u-fb-col-wrapper nav__wrapper">
			<nav className="nav" role="navigation" aria-label="Main Navigation">
				<Link id="home-link" className="nav__link" to="/">
					Website title
				</Link>
				<ul className="nav__links">
					{routes.map(({ path, label }) => (
						<li key={path}>
							<NavLink
								className={({ isActive }) =>
									isActive ? "nav__link nav__link--active" : "nav__link"
								}
								to={path}
								aria-label={`Navigate to ${label}`}
							>
								{label}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

DesktopNav.propTypes = {
	routes: PropTypes.arrayOf(
		PropTypes.shape({
			path: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default DesktopNav;
