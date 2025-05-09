import ContactForm from "./ContactForm/ContactForm.jsx";
import "./Contact.scss";

import ta from "/src/assets/images/terence-allbright-03.jpg";

const Contact = function () {
	return (
		<>
			<section className="contact fb-col-wrapper">
				<h1>Contact</h1>
				<div className="contact__wrapper">
					<div className="contact__form-wrapper">
						<h2>Leave a message for Terry</h2>
						<ContactForm />
					</div>
					<img
						src={ta}
						alt="Terry peering through a window at a poster for his concert."
						className="contact__image"
					/>
				</div>
			</section>
		</>
	);
};

export default Contact;
