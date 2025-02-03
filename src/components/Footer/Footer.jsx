import "./Footer.scss";

const Footer = function () {
	return (
		<footer className="footer fb-col-wrapper">
			<p className="footer__text">
				Copyright © {new Date().getFullYear()} Terence Allbright. All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
