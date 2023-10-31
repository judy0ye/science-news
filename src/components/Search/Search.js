import './Search.css'

export default function Search({search, setSearch}) {
  const handleChange = e => {
    setSearch(e.target.value)
  }

  const handleClick = () => {
    setSearch('')
  }
  return (
    <div className='outer-search-container'>
      <div className='search-container'>
        <label htmlFor='search'/>
        <input 
          id='search'
          type='text'
          placeholder='Search here...'
          value={search}
          onChange={handleChange}
        />
        <button className='clear-search' onClick={handleClick}>X</button>
      </div>
    </div>
  )
}