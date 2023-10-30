export async function fetchTopScienceHeadlines() {
  const res = await fetch (`https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${process.env.REACT_APP_API_KEY}`)
  if (!res.ok) {
    throw new Error(`${res.status}: Failed to fetch headlines`)
  }
  return res.json()
}