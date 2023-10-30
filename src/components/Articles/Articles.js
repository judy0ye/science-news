import { Link } from 'react-router-dom'
import './Articles.css'

export default function Articles({articles}) {
  return articles.map((article, index) => {
    const reducedArticleDate = article.publishedAt.substring(0, 10)
    const articleDate = new Date(reducedArticleDate)
    const formattedDate = `${articleDate.getMonth() + 1}/${articleDate.getUTCDate()}/${articleDate.getFullYear()}`
    return (
      <section className='articles' key={index}>
        <div>
          <img className='main-display-images' src={article.urlToImage} alt={article.title}></img>
        </div>
        <div>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <p>{formattedDate}</p>
          <Link to={`/details/${encodeURIComponent(article.title)}`}>See More</Link>
        </div>
      </section>
    )
  })
}