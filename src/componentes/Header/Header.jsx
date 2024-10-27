import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="row justify-content-center align-items-center py-3">
      <button className="hamburger d-block d-sm-none" onClick={toggleMenu}>
        &#9776; {/* Icono de menú hamburguesa */}
      </button>

      <nav className={`menu col-12 col-md-4 text-center navder ${isOpen ? 'open' : 'd-none d-sm-block'}`}>
        <ul className="list-inline">
          <li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href="https://github.com/gastonvar" className='githublogo'>‎</a></li>
          <li className="list-inline-item"><a href="#sobreMi" className="text-decoration-none">Sobre mi</a></li>
          <li className="list-inline-item"><a href="#proyectos" className="text-decoration-none">Proyectos</a></li>
          <li className="list-inline-item"><a href="#estudios" className="text-decoration-none">Estudios</a></li>
          <li className="list-inline-item"><a href="#contacto" className="text-decoration-none">Contacto</a></li>
          <li className="list-inline-item"><a href="./Escolaridad/Escolaridad.png" target="_blank" className="text-decoration-none">Escolaridad</a></li>
          <li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href="" className='linkedinlogo'>‎</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
