import PropTypes from "prop-types";
import "./List.scss";

const List = function ({ listHeading, listItems }) {
	return (
		<div className="list">
			<h3 className="list__heading">{listHeading}</h3>
			<ul className="list__items-container">
				{listItems.map((listItem, i) => (
					<li key={i} className="list__item">
						{listItem}
					</li>
				))}
			</ul>
		</div>
	);
};

List.propTypes = {
	listHeading: PropTypes.string,
	listItems: PropTypes.arrayOf(PropTypes.string),
};

export default List;
