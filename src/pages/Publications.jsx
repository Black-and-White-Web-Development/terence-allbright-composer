import Publication from "../components/Publication/Publication";
import pubsData from "/src/data/publications.json";
import "./Publications.scss";

const Publications = function () {
	const pubsElements = pubsData.map(pub => (
		<Publication
			key={pub.id}
			title={pub.title}
			instruments={pub.instruments}
			description={pub.description}
		/>
	));

	return (
		<section className="publications fb-col-wrapper">
			<h1 className="publications__heading">Publications</h1>
			<div className="publications__publications">{pubsElements}</div>
		</section>
	);
};

export default Publications;
