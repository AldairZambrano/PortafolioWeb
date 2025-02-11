import '../style/Experiencia.css'

// eslint-disable-next-line react/prop-types
const Cardexperienced = ({titulo,parrafo,habilidad,habilidad1,habilidad2,habilidad3,icon}) =>{
  return (
    <div className="columna col-12 col-md-4">
    <i className={icon}></i>
    <p className="experiencia-titulo">{titulo}</p>
    <p>{parrafo}</p>
    <div className="badges-contenedor">
      <span className="badge text-bg-primary">{habilidad}</span>
      <span className="badge text-bg-primary">{habilidad1}</span>
      <span className="badge text-bg-primary">{habilidad2}</span>
      <span className="badge text-bg-primary">{habilidad3}</span>
    </div>
  </div>
  )
}

export default function Experiencia () {
    return (
        <section className="experiencia seccion-clara">
      <div className="container text-center">
        <div className="row">
           {/* Desarrollo Web  */}
           <Cardexperienced icon='bi bi-gear' titulo='Herramientas' parrafo='Soy un apasionado desarrollador de software con experiencia en una amplia gama de tecnologías web, incluyendo React.js, HTML, CSS, JavaScript y PHP, entre otras. Mi enfoque principal se centra en la construcción de interfaces de usuario modernas y dinámicas utilizando React.js y otras herramientas de desarrollo de front-end.' habilidad='HTML' habilidad2='CSS' habilidad3='JAVASCRIPT' habilidad1='REACT.JS'></Cardexperienced>
          {/* Articulos */}
           <Cardexperienced icon='bi bi-hourglass-split' titulo='Pasatiempo' parrafo='Tengo una dedicación al deporte, un enfoque en la educación y una habilidad para la creación de aplicaciones web. Son intereses versátiles y muestran mi disposición para desarrollar habilidades tanto físicas como intelectuales.' habilidad='Estudiar' habilidad1='Crear' habilidad2='Jugar'></Cardexperienced>
         {/*  Estudiante */}
        <Cardexperienced icon="bi bi-person-bounding-box" titulo='Estudiante' parrafo='Actualmente estoy estudiando Desarrollo Front-End en Plazit, además de cursar la carrera de Desarrollo de Software en la Universidad Digital de Antioquia. Complemento mi formación continuamente con la revisión de documentación técnica para mantenerme actualizado y mejorar mis habilidades. Además, también empecé a estudiar inglés en Plazit.' habilidad='Plazit' habilidad2='iu de Antioquia' habilidad1='Documentacion'></Cardexperienced>
        </div>
      </div>
    </section>
    )
}