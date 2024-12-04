import React, { useState } from 'react';
import '../style/Boton.css'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Muestra u oculta el botón al hacer scroll
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Realiza el scroll hacia arriba al hacer clic en el botón
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Registra el evento de scroll al montar el componente
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className='scrollToTopBtn bi bi-airplane-engines-fill'
      onClick={scrollToTop}
    >
    </button>

  );
};

export default ScrollToTopButton;