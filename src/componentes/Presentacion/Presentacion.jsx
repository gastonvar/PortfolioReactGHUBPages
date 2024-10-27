import React from 'react';
import './Presentacion.css';
import Flecha from '../Flecha/Flecha.jsx';
import Proyectos from '../Proyectos/Proyectos.jsx';
import Estudios from '../Estudios/Estudios.jsx';
import Contacto from '../Contacto/Contacto.jsx';
import Footer from '../Footer/Footer.jsx';
const Presentacion = () => {
  return (
    <div className='presentacion_div col-12 mt-5 mt-lg-0' id='sobreMi'>
      <section className="row justify-content-center align-items-center mb-5">
        <figure className="text-center d-none d-lg-block col-lg-2 bracketopen">
          <img src="./sprites/open-bracket.png" alt="Open Bracket" className="img-fluid" />
        </figure>
        <div className="col-12 col-lg-8 mb-5">
          <h3>Hola, mi nombre es</h3>
          <h1>Gastón Varela.</h1>
          <p>Actualmente soy estudiante avanzado de la carrera <span>Analista en tecnologías de la información</span> en la universidad <span className="ORT">ORT Uruguay</span>.</p>
          <p>Poseo una <span>gran pasión por la resolución de problemas.</span> Cuento con habilidades técnicas sólidas respaldadas por proyectos académicos y experiencia práctica en <span>entornos de desarrollo de clase</span> y <span>proyectos personales</span>.</p>
          <p>Estoy ansioso por obtener mi primera experiencia laboral en el área IT.</p>
          <article className='text-center'>
          <a href="#curriculum" className="text-decoration-none curriculumButton">Currículum</a>
          </article>
         
        </div>
        <figure className="text-center d-none d-lg-block col-lg-2 bracketopen">
          <img src="./sprites/close-bracket.png" alt="Close Bracket" className="img-fluid" />
        </figure>
        <div className="row w-50 col-12 align-items-center">
          <article className="col-12 col-lg-6 text-center articulos_secundarios">
            <h2 className="text-center">Idiomas</h2>
            <p className="text-start">Español - Nativo</p>
            <p className="text-start">
              Inglés - <a target="_blank" rel="noopener noreferrer" href="https://www.efset.org/cert/6upzXT" className="text-decoration-none rounded">Certificado</a>
            </p>
          </article>
          <article className="col-12 col-lg-6 mt-5 mt-lg-0 articulos_secundarios">
  <h2 className="text-center">Tecnologías conocidas</h2>
  <ul className="text-center list-inline">
    <li className='info-tag list-inline-item'>CSS/bootstrap</li>
    <li className='info-tag list-inline-item'>C#/.net</li>
    <li className='info-tag list-inline-item'>JS</li>
    <li className='info-tag list-inline-item'>SQL</li>
  </ul>
  <ul className='text-center list-inline'>
    <li className='info-tag list-inline-item'>Java</li>
    <li className='info-tag list-inline-item'>MongoDB</li>
    <li className='info-tag list-inline-item'>HTML</li>
    <li className='info-tag list-inline-item'>REACT</li>
  </ul>
</article>

        </div>
        <Proyectos></Proyectos>
        <Estudios></Estudios>
        <Contacto></Contacto>
        <Footer></Footer>
      </section>
    </div>
  );
};

export default Presentacion;
