import { useEffect, useState } from 'react';
import './App.css';
import Header from '../Header/Header';
// import { fetchTopScienceHeadlines } from '../../apiCalls';
import mockData from '../../mockData/scienceHeadlines.json'
import Articles from '../Articles/Articles';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [articles, setArticles] = useState([])
  
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
        <Route path='/' element={<Articles articles={articles}/>}/>
      </Routes>
    </div>
  );
}

export default App;
