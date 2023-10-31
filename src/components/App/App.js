import { useEffect, useState } from 'react';
import './App.css';
// import { fetchTopScienceHeadlines } from '../../apiCalls';
import mockData from '../../mockData/scienceHeadlines.json'
import Header from '../Header/Header';
import Articles from '../Articles/Articles';
import DetailedArticle from '../DetailedArticle/DetailedArticle';
import Search from '../Search/Search';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [articles, setArticles] = useState([])
  const [search, setSearch] = useState('')
 
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
        <Route path='/' element={<><Search setSearch={setSearch}/> <Articles articles={articles}/>  </> }/>
        <Route path='/details/:articleTitle' element={<DetailedArticle articles={articles}/>}/>
      </Routes>
    </div>
  );
}

export default App;
