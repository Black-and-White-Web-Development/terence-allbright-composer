import PropTypes from "prop-types";
import "./Publication.scss";

const Publication = function ({ title, instruments, description }) {
	const instrumentElements = instruments.map((instrument, i) => (
		<li key={i} className="publication__instrument small">
			{instrument}
		</li>
	));

	return (
		<article className="publication">
			<h3 className="publication__title">{title}</h3>
			<ul className="publication__instruments">{instrumentElements}</ul>
			<p className="publication__description">{description}</p>
		</article>
	);
};

Publication.propTypes = {
	title: PropTypes.string.isRequired,
	instruments: PropTypes.arrayOf(PropTypes.string).isRequired,
	description: PropTypes.string.isRequired,
};

export default Publication;
