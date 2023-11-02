import { Link } from 'react-router-dom'
import './Error.css'
import cat from '../../assets/cat.jpg'

export default function Error({error}) {
  return (
    <div className='error'>
      {error ? <h2>{error}</h2> : <h2>Oops, Nothing to see here!</h2>}
      <img className='error-img' src={cat} alt='upside down cat'/>
      <Link className='home' to='/'>Home</Link>
    </div>
  )
}