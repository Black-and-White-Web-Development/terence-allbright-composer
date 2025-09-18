import PropTypes from "prop-types";

import "./Article.scss";

const Article = function ({ article }) {
	return (
		<article className="article article--event">
			<header className="article__header">
				<h3 className="article__heading">{article.heading}</h3>
				<dl className="article__metadata">
					<div className="article__metadata-item">
						<dt className="article__metadata-term">Published on</dt>
						<dd className="article__metadata-details article__metadata-details--date">
							<time>{article.publicationDate}</time>
						</dd>
					</div>
					<div className="article__metadata-item">
						<dt className="article__metadata-term visually-hidden">Category</dt>
						<dd className="article__metadata-details article__metadata-details--category">
							{article.category}
						</dd>
					</div>
				</dl>
			</header>
			{article.category === "Event" && (
				<div className="article__content">
					<dl>
						<div className="article__event-item">
							<dt className="article__event-term visually-hidden">Date</dt>
							<dd className="article__event-details article__event-details--date">
								<time>{article.startDate}</time>
								{article.endDate && ` - ${(<time>{article.endDate}</time>)}`}
							</dd>
						</div>
						<div className="article__event-item">
							<dt className="article__event-term visually-hidden">Location</dt>
							<dd className="article__event-details article__event-details--location">
								{article.location}
							</dd>
						</div>
						<div className="article__event-item">
							<dt className="article__event-term">Event page</dt>
							<dd className="article__event-details article__event-details--link">
								<a
									className="article__link"
									href={article.link.href}
									target="_blank"
									rel="noopener"
								>
									{article.link.label}
								</a>
							</dd>
						</div>
					</dl>
					<div className="article__body">
						{article.description.map((p, i) => (p === "" ? <br key={i} /> : <p key={i}>{p}</p>))}
					</div>
				</div>
			)}
		</article>
	);
};

Article.propTypes = {
	article: PropTypes.shape({
		heading: PropTypes.string.isRequired,
		category: PropTypes.string.isRequired,
		publicationDate: PropTypes.string.isRequired,
		startDate: PropTypes.string,
		endDate: PropTypes.string,
		location: PropTypes.string,
		description: PropTypes.arrayOf(PropTypes.string),
		link: PropTypes.shape({
			href: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
		}),
	}).isRequired,
};

export default Article;
