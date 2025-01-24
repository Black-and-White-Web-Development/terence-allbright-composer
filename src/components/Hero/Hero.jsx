import PropTypes from "prop-types";
import "./Hero.scss";

const Hero = function ({
	heading,
	description,
	icon = "/src/assets/cluny-house-consulting-logo.svg",
}) {
	return (
		<header className="hero u-fb-col-wrapper">
			<div className="hero__img-wrapper">
				<img className="hero__img" src={icon} alt="" />
			</div>
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
