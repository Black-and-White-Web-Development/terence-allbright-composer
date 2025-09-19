import React from "react";
import PropTypes from "prop-types";
import "./Publication.scss";

const Publication = React.memo(function Publication({
	title,
	year,
	instruments,
	description,
	link,
}) {
	const instrumentElements = instruments.map((instrument, i) => (
		<li key={i} className="publication__instrument small">
			{instrument}
		</li>
	));

	return (
		<article className="publication">
			<header className="publication__header">
				<h3 className="publication__title">{title}</h3>
				<p className="publication__year small">{year}</p>
				<ul className="publication__instruments">{instrumentElements}</ul>
			</header>
			<div className="publication__description">
				{description.map((p, i) =>
					p === "" ? (
						<br key={i} />
					) : (
						<p key={i} className="publication__paragraph">
							{p}
						</p>
					)
				)}
			</div>
			<a href={link} target="_blank" className="publication__link">
				View score on Composers Edition ➞<span className="new-tab-message">(opens in new tab)</span>
			</a>
		</article>
	);
});

Publication.propTypes = {
	title: PropTypes.string.isRequired,
	year: PropTypes.string.isRequired,
	instruments: PropTypes.arrayOf(PropTypes.string).isRequired,
	description: PropTypes.arrayOf(PropTypes.string).isRequired,
	link: PropTypes.string.isRequired,
};

export default Publication;
