import './Search.css'

export default function Search({setSearch}) {
  const handleChange = e => {
    setSearch(e.target.value)
  }
  return (
    <div>
      <label htmlFor='search'/>
      <input 
        id='search'
        type='text'
        placeholder='Search here...'
        onChange={handleChange}
      />
    </div>
  )
}