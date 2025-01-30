import PropTypes from "prop-types";
import "./Hero.scss";

const Hero = function ({ heading, description }) {
	return (
		<header className="hero u-fb-col-wrapper">
			<h1 className="hero__heading">{heading}</h1>
			<p className="hero__description">{description}</p>
		</header>
	);
};

Hero.propTypes = {
	heading: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	icon: PropTypes.string,
};

export default Hero;
