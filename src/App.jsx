import Footer from './components/footer'
import Header from './components/header'
import Cards from './components/cards'
import './App.css'
import profilePicture from './assets/20240724_092946.jpg'

function App() {


  return (
    <>
      <Header></Header>
      <div>
        <img className='profile-img' src={profilePicture} alt="Foto de perfil" />
        <div>
          <h1>Curriculum Vitae</h1>
          <h1>Sequeira Walter Emanuel</h1>
        </div>
      </div>
      <a href="#header">
        <Cards />
        <p className="read-the-docs">
          Clic para volver a las secciones
        </p></a>
      <Footer />
    </>
  )
}

export default App
