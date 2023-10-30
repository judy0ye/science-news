import { useParams } from 'react-router-dom'
import './DetailedArticle.css'

export default function DetailedArticle({articles}) {
  const {articleTitle} = useParams()
  const article = articles?.find(article => article.title === articleTitle)
  const reducedArticleDate = article.publishedAt.substring(0, 10)
  const articleDate = new Date(reducedArticleDate)
  const formattedDate = `${articleDate.getMonth() + 1}/${articleDate.getUTCDate()}/${articleDate.getFullYear()}`
  
  return article && (
    <article className='detailed-article'>
      <h2>{article.title}</h2>
      <p>Published: {formattedDate}</p>
      <p>By: {article.author}</p>
      <img className='detailed-article-image' src={article.urlToImage} alt={article.title}></img>
      <p>{article.content}</p>
      <p>Source: {article.source.name}</p>
      <a href={article.url} target='_blank'>See Source Article</a>
    </article>
  )
}