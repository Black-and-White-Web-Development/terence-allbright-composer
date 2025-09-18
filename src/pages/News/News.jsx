import Article from "./Article/Article";
import newsData from "/src/data/news.json";
import "./News.scss";

const News = function () {
	return (
		<section className="news fb-col-wrapper">
			<h1 className="news__heading">News</h1>
			<ul className="news__list">
				{newsData.map(article => (
					<li key={article.id} className="news__list-item">
						<Article article={article} />
					</li>
				))}
			</ul>
		</section>
	);
};

export default News;
