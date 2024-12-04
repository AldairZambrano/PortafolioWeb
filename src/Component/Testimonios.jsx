import imagenes from "./imagenes"
import '../style/Testimonio.css'

const CarruselActive = () => {
    return (
        <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <img className="testimonio-imagen rounded-circle" src={imagenes.Cliente1} alt='cliente 1' />
                <p className="testimonio-texto">Tiene una capacidad para expresarte de manera clara y persuasiva es altamente valorada. Te comunicas de manera efectiva tanto verbalmente como por escrito, y tienes la habilidad de transmitir tus ideas de forma convincente. Tu capacidad para escuchar activamente también te ayuda a entender las necesidades de los demás y a responder adecuadamente.</p>
                <div className="testimonio-info">
                  <p className="cliente">Yeison Tapias </p>
                  <p className="cargo">Coordinador de poscosecha de banarica</p>
                </div>
              </div>
            </div>
            {/* <Carrusel imagene={imagenes.Cliente3} Alt='cliente2' nombreDelTestigo='Cristhian Barrios' profesion='Ingeniero en sistema' Testigos='Tiene una mente creativa y habilidad para pensar fuera de lo convencional te distinguen. Siempre aportas ideas frescas y soluciones originales a los desafíos que enfrentas. Tus enfoques innovadores y tu disposición a explorar nuevas posibilidades inspiran a los demás y generan un ambiente de creatividad y progreso.'></Carrusel>
            <Carrusel imagene={imagenes.Cliente2} Alt='cliente3' nombreDelTestigo='Rosa Peralta' profesion='Enfermera Jefe' Testigos='Eres conocido por tu naturaleza amable y disposición para ayudar a los demás. Siempre estás dispuesto a brindar apoyo, ya sea en proyectos académicos, en problemas personales o simplemente para escuchar. Tu actitud solidaria y empática te hace destacar como alguien en quien se puede confiar y contar.'></Carrusel>
                 */}
        </div>    
    )
}
const Carrusel = ({imagene,Alt,nombreDelTestigo,profesion,Testigos}) => {
  return (
    <div className="carousel-item">
    <div className="container">
      <img className="testimonio-imagen rounded-circle" src={imagene} alt={Alt} />
      <p className="testimonio-texto">{Testigos}</p>
      <div className="testimonio-info">
        <p className="cliente">{nombreDelTestigo}</p>
        <p className="cargo">{profesion}</p>
      </div>
    </div>
  </div>
  )
}

export default function Testimonios () {
    return(
        <section id="testimonios" className="testimonios seccion-clara">
        <h2 className="seccion-titulo">Testimonios</h2>
        <h3 className="seccion-descripcion">Estos son algunos testimonios de mis clientes...</h3>
        
        {/* carrusel */}
        <div id="testimonios-carrusel" className="carousel carousel-dark slide" data-bs-ride="carousel">
          
            {/* testimonio 1 */}
            <CarruselActive>
                
            </CarruselActive>
          
     
          <button className="carousel-control-prev" type="button" data-bs-target="#testimonios-carrusel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonios-carrusel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </section>
    )
}