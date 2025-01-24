import "./Footer.scss";

const Footer = function () {
	return (
		<footer className="footer u-fb-col-wrapper">
			<p className="footer__text">
				Copyright © {new Date().getFullYear()} Cluny House Consulting. All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
