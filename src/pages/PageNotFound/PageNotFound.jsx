import { Link } from "react-router-dom";
import "./PageNotFound.scss";

export const PageNotFound = function () {
	return (
		<section className="not-found fb-col-wrapper">
			<h1 className="not-found__heading">Page not found</h1>
			<p className="not-found__body medium">
				If you&apos;re looking for one of Terry&apos;s publications, he hasn&apos;t composed this
				one yet!
			</p>
			<div className="not-found__links">
				<Link to="/publications" className="not-found__link">
					View Terry&apos;s published works
				</Link>
				<Link to="/" className="not-found__link">
					Go back to the home page
				</Link>
			</div>
		</section>
	);
};

export default PageNotFound;
