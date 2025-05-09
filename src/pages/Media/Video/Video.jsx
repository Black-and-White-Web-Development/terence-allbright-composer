import PropTypes from "prop-types";
import YoutubeEmbed from "./YoutubeEmbed/YoutubeEmbed.jsx";
import "./Video.scss";

const Video = function ({ title, embedId, children, showTitle = true }) {
	return (
		<article className="media__item video">
			{showTitle && (
				<header className="video__header">
					<h2>{title}</h2>
				</header>
			)}
			<YoutubeEmbed embedId={embedId} />
			<div className="video__description">{children}</div>
		</article>
	);
};

Video.propTypes = {
	title: PropTypes.string.isRequired,
	embedId: PropTypes.string.isRequired,
	children: PropTypes.node,
	showTitle: PropTypes.bool,
};

export default Video;
