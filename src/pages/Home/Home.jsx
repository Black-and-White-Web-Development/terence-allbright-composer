import { Link } from "react-router-dom";
import Hero from "./Hero/Hero";
import Video from "../Media/Video/Video";
import "./Home.scss";

import pubsData from "/src/data/publications.json";
import composing from "/src/assets/images/composing.jpg";
import recording from "/src/assets/images/recording.jpg";

const getLatestPubs = (data, count = 3) => {
	return data
		.map(item => ({
			...item,
			parsedYear: Math.max(...item.year.match(/\d{4}/g).map(Number)),
		}))
		.sort((a, b) => b.parsedYear - a.parsedYear)
		.slice(0, count);
};

const formatList = (arr, locale = "en") =>
	new Intl.ListFormat(locale, { style: "long", type: "conjunction" }).format(arr);

const latestPubs = getLatestPubs(pubsData);

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
							<ul className="feature__list">
								{latestPubs.map(pub => (
									<li key={pub.id} className="feature__list-item latest-pub">
										<h3 className="latest-pub__heading">{pub.title}</h3>
										<p className="latest-pub__instruments">For {formatList(pub.instruments)}</p>
										<a href={pub.link} target="_blank" className="latest-pub__link">
											View on Composers Edition
										</a>
									</li>
								))}
							</ul>
						</div>
						<footer className="feature__footer">
							<Link to="/publications" className="feature__link">
								View all publications
							</Link>
						</footer>
					</article>
					<article className="home__feature feature">
						<header className="feature__header">
							<img src={recording} alt="" className="feature__image" />
							<h2 className="feature__heading">Featured recording</h2>
						</header>
						<div className="feature__content">
							<article className="featured-vid">
								<h3 className="featured-vid__heading">Narratives & Rituals</h3>
								<Video title="Narratives & Rituals" embedId="tLgOI8JfVgI" showTitle={false}></Video>
							</article>
						</div>
						<footer className="feature__footer">
							<Link to="/media" className="feature__link">
								View all media
							</Link>
						</footer>
					</article>
				</div>
			</section>
		</>
	);
};

export default Home;
