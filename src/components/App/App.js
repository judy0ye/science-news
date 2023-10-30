import { useEffect } from 'react';
import './App.css';
import Header from './Header/Header';
import { fetchTopScienceHeadlines } from '../../apiCalls';

function App() {
  useEffect(() => {
    const getTopSceienceHeadlines = async () => {
      try {
        const topScienceHeadlines = await fetchTopScienceHeadlines()
        console.log(topScienceHeadlines.articles)
      } catch (error) {
        console.log(error)
      }
    }
    getTopSceienceHeadlines() 
  }, [])

  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
