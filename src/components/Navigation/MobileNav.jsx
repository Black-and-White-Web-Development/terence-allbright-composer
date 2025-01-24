import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./MobileNav.scss";
import "./DesktopNav.scss";

import logo from "/src/assets/cluny-house-consulting-logo.svg";
import hamburger from "/src/assets/hamburger.svg";
import close from "/src/assets/close.svg";

const MobileNav = function ({ routes }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleHamburger = () => {
		setIsMenuOpen(prevState => !prevState);
	};

	return (
		<header className="u-fb-col-wrapper nav__wrapper">
			<nav id="nav--mobile" className="nav" role="MobileNav" aria-label="Main navigation">
				<header className="nav__header">
					<Link id="home-link" className="nav__link" to="/">
						<img className="nav__icon" src={logo} alt="Cluny House Consulting logo" />
						Cluny House Consulting
					</Link>
					<button
						className="menu-button nav__button"
						aria-label="Open navigation menu"
						onClick={handleHamburger}
					>
						<span className="menu-button__label">Menu</span>
						<img
							className="menu-button__icon nav__icon"
							src={isMenuOpen ? close : hamburger}
							alt="Menu icon"
						/>
					</button>
				</header>
				<ul className={`nav__links ${isMenuOpen ? "open" : ""}`}>
					{routes.map(({ path, label, icon }) => (
						<li key={path} onClick={() => setIsMenuOpen(false)}>
							<NavLink
								className={({ isActive }) =>
									isActive ? "nav__link nav__link--active" : "nav__link"
								}
								to={path}
								aria-label={`Navigate to ${label}`}
							>
								<img className="nav__icon" src={icon} alt="" />
								{label}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

MobileNav.propTypes = {
	routes: PropTypes.arrayOf(
		PropTypes.shape({
			path: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			icon: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default MobileNav;
