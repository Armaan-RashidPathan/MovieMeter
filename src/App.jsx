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
      <MovieCards name="Movie3" genre={"Action"} year={2002} img={sampleThumbnail}/>
      <MovieCards name="Movie4" genre={"Fantasy"} year={2003} img={sampleThumbnail}/>
      <MovieCards name="Movie5" genre={"Suspense"} year={2004} img={sampleThumbnail}/>
      <Footer/>
    </>
  )
}

export default App