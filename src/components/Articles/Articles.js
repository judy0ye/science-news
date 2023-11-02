import { Link } from 'react-router-dom';
import './Articles.css';
import missing from '../../assets/404.jpg';

export default function Articles({ articles, search }) {
  const searchedArticles = articles.filter((article) => {
    return Object.values(article).some((value) => {
      if (typeof value === 'string') {
        return value.toLowerCase().includes(search.toLowerCase());
      }
    });
  });

  if (searchedArticles.length === 0) {
    return (
      <p className="no-results">
        Sorry, no articles match your search. Please try something else!
      </p>
    );
  }

  return searchedArticles.map((article, index) => {
    const reducedArticleDate = article.publishedAt.substring(0, 10);
    const articleDate = new Date(reducedArticleDate);
    const formattedDate = `${
      articleDate.getMonth() + 1
    }/${articleDate.getUTCDate()}/${articleDate.getFullYear()}`;
    return (
      <section className="articles" key={index}>
        <div>
          {article.urlToImage ? (
            <img
              className="main-display-images"
              src={article.urlToImage}
              alt={article.title}
            />
          ) : (
            <img
              className="main-display-missing-image"
              src={missing}
              alt="missing"
            />
          )}
        </div>
        <div className="details">
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <p>{formattedDate}</p>
          <Link
            className="see-more"
            to={`/details/${encodeURIComponent(article.title)}`}>
            See More
          </Link>
        </div>
      </section>
    );
  });
}
