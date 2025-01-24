import PropTypes from "prop-types";
import ContactForm from "/src/components/ContactForm/ContactForm";
import "./Contact.scss";

const Contact = function ({ heading, children }) {
	return (
		<div className="contact">
			<div className="contact__content">
				<header className="contact__heading">
					<h2 className="contact__heading">{heading}</h2>
				</header>
				{children}
			</div>
			<ContactForm />
		</div>
	);
};

Contact.propTypes = {
	heading: PropTypes.string,
	children: PropTypes.node,
};

export default Contact;
