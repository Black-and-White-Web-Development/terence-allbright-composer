import { Link } from "react-router-dom";
import Hero from "./Hero/Hero";
import "./Home.scss";

import composing from "/src/assets/images/composing.jpg";
import recording from "/src/assets/images/recording.jpg";

const Home = function () {
	return (
		<>
			<Hero />
			<section className="home fb-col-wrapper">
				<div className="home__features">
					<article className="home__feature feature">
						<header className="feature__header">
							<img src={composing} alt="" className="feature__image" />
							<h2 className="feature__heading">Latest compositions</h2>
						</header>
						<div className="feature__content">
							<Link to="/publications" className="feature__link">
								View all publications
							</Link>
						</div>
					</article>
					<article className="home__feature feature">
						<header className="feature__header">
							<img src={recording} alt="" className="feature__image" />
							<h2 className="feature__heading">Latest recordings</h2>
						</header>
						<div className="feature__content">
							<Link to="/publications" className="feature__link">
								View all media
							</Link>
						</div>
					</article>
				</div>
			</section>
		</>
	);
};

export default Home;
