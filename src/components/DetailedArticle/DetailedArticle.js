import { Link, useNavigate, useParams } from 'react-router-dom'
import './DetailedArticle.css'
import missing from '../../assets/404.jpg';

export default function DetailedArticle({articles}) {
  const navigate = useNavigate()
  const {articleTitle} = useParams()
  const article = articles?.find(article => article.title === decodeURIComponent(articleTitle))
  const reducedArticleDate = article?.publishedAt.substring(0, 10)
  const articleDate = new Date(reducedArticleDate)
  const formattedDate = `${articleDate.getMonth() + 1}/${articleDate.getUTCDate()}/${articleDate.getFullYear()}`
  
  return article ? (
    <article >
      <Link className='back' to='/'>Back To Main</Link>
      <div className='detailed-article'>
        <h2>{article.title}</h2>
        <p>Published: {formattedDate}</p>
        {article.author && <p>By: {article.author}</p>}
        {article.urlToImage ? <img className='detailed-article-image' src={article.urlToImage} alt={article.title} /> :
        <img className='detailed-article-image' src={missing} alt='missing' />
        }
        <p>{article.content}</p>
        <p>Source: {article.source.name}</p>
        <a className='outside-source' href={article.url} target='_blank'>See Source Article</a>
      </div>
    </article> 
  ): navigate('*')
}