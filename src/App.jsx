import './App.css'
import MovieCards from './cards'
import sampleThumbnail from './assets/sampleThumbnail.jpg'

function App() {

  return (
    <>
      <MovieCards name="Movie1" genre={"horror"} year={2000} img={sampleThumbnail}/>
    </>
  )
}

export default App