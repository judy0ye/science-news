import { useEffect, useState } from 'react';
import './App.css';
// import { fetchTopScienceHeadlines } from '../../apiCalls';
import mockData from '../../mockData/scienceHeadlines.json'
import Header from '../Header/Header';
import Articles from '../Articles/Articles';
import DetailedArticle from '../DetailedArticle/DetailedArticle';
import Search from '../Search/Search';
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
  const [articles, setArticles] = useState([])
  const [search, setSearch] = useState('')
  const location = useLocation()
 
  useEffect(() => {
    setSearch('')
  }, [location])
  
  useEffect(() => {
    const getTopSceienceHeadlines = async () => {
      try {
        // const topScienceHeadlines = await fetchTopScienceHeadlines()
        // console.log(topScienceHeadlines.articles)
        setArticles(mockData.articles)
      } catch (error) {
        console.log(error)
      }
    }
    getTopSceienceHeadlines() 
  }, [])

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<><Search search={search} setSearch={setSearch}/> <Articles articles={articles} search={search}/>  </> }/>
        <Route path='/details/:articleTitle' element={<DetailedArticle articles={articles}/>}/>
      </Routes>
    </div>
  );
}

export default App;
