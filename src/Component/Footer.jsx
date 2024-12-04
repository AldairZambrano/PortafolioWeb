import '../style/Footer.css'
import imagenes from './imagenes'

// eslint-disable-next-line react/prop-types
const IconosRedes = ({direccion,icono}) => {
    return(
        <a href={direccion} target="_blank" rel="noopener noreferrer">
        <i className={icono}></i>
      </a>
    )
}
export default function Footer () {
    return(
        <footer className="seccion-oscura d-flex flex-column align-items-center justify-content-center"> 
        <img className="footer-logo" src={imagenes.LogoContacto} alt="Logo del portafolio" />
        <p className="footer-texto text-center">Aprendo y creo todos los días.<br />Creemos un proyecto juntos.</p>
        <div className="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
           
           <IconosRedes direccion='https://twitter.com/zambrano_pertuz' icono='bi bi-twitter'></IconosRedes>
           <IconosRedes direccion='https://github.com/AldairZambrano' icono='bi bi-github'></IconosRedes>
           <IconosRedes direccion='https://www.linkedin.com/in/aldair-javier-zambrano-pertuz-537b6026b/' icono='bi bi-linkedin'></IconosRedes>
           <IconosRedes direccion='mailto:aldairzambrano12345@gmail.com' icono='bi bi-envelope'></IconosRedes>
        </div>
        <div className="derechos-de-autor">Creado por Aldair Zambrano (2023) &#169;</div>
      </footer>
    )
}