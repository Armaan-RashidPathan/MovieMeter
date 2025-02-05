import './App.css'
import MovieCards from './cards'
import sampleThumbnail from './assets/sampleThumbnail.jpg'

function App() {

  return (
    <>
      <MovieCards name="Movie1" genre={"Horror"} year={2000} img={sampleThumbnail}/>
      <MovieCards name="Movie2" genre={"Drama"} year={2001} img={sampleThumbnail}/>
    </>
  )
}

export default App