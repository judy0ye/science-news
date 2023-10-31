import { Link } from 'react-router-dom';
import './Articles.css';

export default function Articles({ articles, search }) {
  return (
    articles
      .filter((article) => {
        return Object.values(article).some((value) => {
          if (typeof value === 'string') {
            return value.toLowerCase().includes(search.toLowerCase());
          }
        });
      })
      .map((article, index) => {
        const reducedArticleDate = article.publishedAt.substring(0, 10);
        const articleDate = new Date(reducedArticleDate);
        const formattedDate = `${
          articleDate.getMonth() + 1
        }/${articleDate.getUTCDate()}/${articleDate.getFullYear()}`;
        return (
          <section className="articles" key={index}>
            <div>
              <img
                className="main-display-images"
                src={article.urlToImage}
                alt={article.title}></img>
            </div>
            <div>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <p>{formattedDate}</p>
              <Link className='see-more' to={`/details/${encodeURIComponent(article.title)}`}>
                See More
              </Link>
            </div>
          </section>
        );
      })
  );
}
