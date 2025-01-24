import PropTypes from "prop-types";
import "./ProcessOverview.scss";

const ProcessOverview = function ({ heading = "How do we do it?", steps }) {
	return (
		<div className="process">
			<h2 className="process__heading">{heading}</h2>
			<div className="process__steps">
				{steps.map((step, i) => (
					<article key={i} className="process-step">
						<header className="process-step__header">
							<img className="process-step__icon" src={step.icon} alt="" />
							<h3 className="process-step__heading">{step.heading}</h3>
						</header>
						<p className="process-step__body">{step.body}</p>
					</article>
				))}
			</div>
		</div>
	);
};

ProcessOverview.propTypes = {
	heading: PropTypes.string,
	steps: PropTypes.arrayOf(
		PropTypes.shape({
			heading: PropTypes.string,
			icon: PropTypes.string,
			body: PropTypes.string,
		})
	),
};

export default ProcessOverview;
