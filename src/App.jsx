import BarraNavegacion from './Component/BarraNavegacion'
import Hero from './Component/Hero'
import Experiencia from './Component/Experiencia'
import Proyectos from './Component/Proyectos'
import Testimonios from './Component/Testimonios'
import Footer from './Component/Footer'
import ScrollToTopButton from './Component/BotonDeSubir'
import './App.css'

// sobre mi
const SobreMi = () => {
  return (
    <section id="sobre-mi" className="sobre-mi seccion-oscura">
    <div className="contenedor">
      <h2 className="seccion-titulo">Conoce a Aldair Zambrano</h2>
      <p className="seccion-texto">Soy desarrollador front-end, Técnico Profesional en Mantenimiento de sistemas informaticos, soy una persona con alta motivación por aprender, mejorar cada día mis habilidades de desarrollador para lograr mi objetivo de ser desarrollador FullStack, además de poder crecer como persona, Estoy orientada a la objetividad, proactiva y detallista.</p>
    </div>
  </section>
  )
}

// contactos

const Contactos = () => {
  return (
    <section id="contacto" className="contacto seccion-oscura">
    <div className="container">
      <div className="container text-center rectangulo d-flex justify-content-evenly">
        <div className="row">
          <div className="col-12 col-md-4 seccion-titulo">
            ¡Hablemos!
          </div>
          <div className="col-12 col-md-4 descripcion">
            Contáctame para iniciar tu proyecto de desarrollo web y haré que tu visión se vuelva realidad.
          </div>
          <div className="col-12 col-md-4">
            <a href="mailto:aldairzambrano12345@gmail.com">
              <button type="button">  
                Contacto
                <i className="bi bi-envelope-check-fill" style={{marginLeft:"5px"}}></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}
function App() {

  return (
  <>      
       <BarraNavegacion></BarraNavegacion> 
       <Hero></Hero>
       <SobreMi></SobreMi>
       <Experiencia></Experiencia>
       <Proyectos></Proyectos>
       <Testimonios></Testimonios>
       <Contactos></Contactos>
       <Footer></Footer>
       <ScrollToTopButton></ScrollToTopButton>
       </>

  )
}

export default App
