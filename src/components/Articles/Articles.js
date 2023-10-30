import './Articles.css'

export default function Articles({articles}) {
  return articles.map(article => {
    return (
      <section className='articles' key={article.title}>
        <div>
          <img className='main-display-images' src={article.urlToImage} alt={article.title}></img>
        </div>
        <div>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <p>{article.publishedAt}</p>
          <button>See More</button>
        </div>
      </section>
    )
  })
}