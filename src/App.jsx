import './App.css'
import MovieCards from './cards'
import sampleThumbnail from './assets/sampleThumbnail.jpg'
import Header from './header.jsx'
import Footer from './footer.jsx'
function App() {

  return (
    <>
      <Header/>
      <MovieCards name="Movie1" genre={"Horror"} year={2000} img={sampleThumbnail}/>
      <MovieCards name="Movie2" genre={"Drama"} year={2001} img={sampleThumbnail}/>
      <Footer/>
    </>
  )
}

export default App