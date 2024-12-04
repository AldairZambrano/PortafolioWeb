import imagenes from "./imagenes"
import '../style/Proyectos.css'

// eslint-disable-next-line react/prop-types
const Proyect = ({UrlImg,alt, nameProyect, DireccionProyectRepo,DireccionProyectweb}) => {
return(
    <div className="col-12 col-md-6 col-lg-4">
    <div className="proyecto">
      <img src={UrlImg} alt={alt} />
      <div className="overlay">
        <p>{nameProyect}</p>
        <div className="iconos-contenedor">
          <a href={DireccionProyectRepo} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i>
          </a>
          <a href={DireccionProyectweb} target="_blank" rel="noopener noreferrer">
          <i className="bi bi-globe2"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
)
}

export default function Proyectos () {
    return(
      <section id="proyectos" className="proyectos-recientes seccion-clara d-flex flex-column">
        <h2 className="seccion-titulo texto-negro">Mis proyectos</h2>
        <h3 className="seccion-descripcion">Estos son algunos proyectos que he creado recientemente...</h3> 
        <div className="container text-center proyectos-contenedor">  
        <div className="row">
        
         {/* primer proyecto */}
         <Proyect UrlImg={imagenes.Proyect3} alt='proyecto 3' nameProyect='CV' DireccionProyectRepo='https://github.com/AldairZambrano/CV' DireccionProyectweb='https://aldairzambrano.github.io/CV/'></Proyect>
        <Proyect  UrlImg={imagenes.Proyect5} alt='proyecto 5' nameProyect='Portafolio' DireccionProyectRepo='https://github.com/AldairZambrano/PortafolioReact.js' DireccionProyectweb='https://portafolio-ajzp.netlify.app/'></Proyect>
        <Proyect  UrlImg={imagenes.TIC} alt='proyecto 11' nameProyect='Tic tac toe' DireccionProyectRepo='https://github.com/AldairZambrano/tic-tac-toe' DireccionProyectweb='https://tic-tac-toei.netlify.app/'></Proyect>
        <Proyect  UrlImg={imagenes.Camara} alt='proyecto 10' nameProyect='Camara' DireccionProyectRepo='https://github.com/AldairZambrano/Camara' DireccionProyectweb='https://zippy-twilight-99a722.netlify.app/'></Proyect>
        <Proyect  UrlImg={imagenes.random} alt='proyecto 33' nameProyect='Random Quote Machine' DireccionProyectRepo='https://github.com/AldairZambrano/Random-' DireccionProyectweb='https://random-alda.netlify.app/'></Proyect>
        <Proyect UrlImg={imagenes.tienda} alt='proyecto 7' nameProyect='Tienda fast food' DireccionProyectRepo='https://github.com/AldairZambrano/Tienda' DireccionProyectweb='https://tienda-fast-foot.netlify.app/'></Proyect>
        <Proyect  UrlImg={imagenes.tiendaderopa} alt='proyecto 8' nameProyect='Tienda de Ropa' DireccionProyectRepo='https://github.com/AldairZambrano/tiendaderopa' DireccionProyectweb='https://aldairzambrano.github.io/tiendaderopa/'></Proyect>
        <Proyect UrlImg={imagenes.admiImv} alt='proyecto 9' nameProyect='admi-imv' DireccionProyectRepo='https://github.com/AldairZambrano/admi-imv' DireccionProyectweb='https://admi-imv.netlify.app/'></Proyect>
        <Proyect UrlImg={imagenes.markdown2} alt='proyecto 12' nameProyect='Markdown' DireccionProyectRepo='https://github.com/AldairZambrano/Markdown-previewer' DireccionProyectweb='https://markdown-aldair.netlify.app/'></Proyect>
        <Proyect UrlImg={imagenes.caja} alt='proyecto 1' nameProyect='Caja de ritmo' DireccionProyectRepo='https://github.com/AldairZambrano/Drum-Machine' DireccionProyectweb='https://caja-ritmos.netlify.app/'></Proyect>
        <Proyect UrlImg={imagenes.calculadoraMezcla} alt='proyecto 2' nameProyect='Calculadora de Mezclas' DireccionProyectRepo='https://github.com/AldairZambrano/Calculador_de_mezclas' DireccionProyectweb='https://calculadormezclas.netlify.app/'></Proyect>
        <Proyect UrlImg={imagenes.alarma}alt='proyecto 4' nameProyect='alarma' DireccionProyectRepo='https://github.com/AldairZambrano/Build' DireccionProyectweb='https://alarma-ru.netlify.app/'></Proyect>
        </div>
      </div>
      <a href="https://github.com/AldairZambrano" target="_blank" rel="noopener noreferrer">
        <button type="button" className="btn btn-info">
          Ver más proyectos
          <i className="bi bi-arrow-right-circle-fill"></i>
        </button>
      </a>
    </section> 
    )
}