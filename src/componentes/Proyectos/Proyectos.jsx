import React, { useEffect } from 'react'
import './Proyectos.css'
const Proyectos = () => {

    useEffect(() => {
        const handleResize = () => {
          const accordionButtons = document.querySelectorAll('.accordion-button');
          const accordionBodies = document.querySelectorAll('.accordion-collapse');
    
          accordionButtons.forEach((button) => {
            if (window.innerWidth < 991) {
              button.classList.remove('collapsed');
              button.setAttribute('aria-expanded', 'true');
            } else {
              button.classList.add('collapsed');
              button.setAttribute('aria-expanded', 'false');
            }
          });
    
          accordionBodies.forEach((body) => {
            if (window.innerWidth < 991) {
              body.classList.add('show');
            } else {
              body.classList.remove('show');
            }
          });
        };
    
        handleResize();
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);




  return (
    <section className="row justify-content-center my-5 proyectos_div">
      <aux id="proyectos"></aux>
            <h2 className="col-12 text-center">Proyectos</h2>
            <p className="col-7 text-center">que he desarrollado y culminado a lo largo de la carrera, documentación y archivos en <span>GitHub</span></p>
            <div className="accordion col-12 col-md-8" style={{cursor:'pointer'}} id="accordionExample">
                <div className="accordion-item" role="button">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                      Programación <figure className="ms-2"></figure>
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body row justify-content-center">
                      <p className="col-12 accordion-caption text-center" id="accordion-caption">
                        Proyectos en los que se trabajó durante cada semestre, siempre siguiendo las mejores prácticas aprendidas, aproximando las 100 horas de código.
                        </p>
                        <article className="col-10 col-md-5 mb-3">
                        <figure>
                          <a target="_blank" rel="noopener noreferrer" href="https://github.com/gastonvar/Portfolio/tree/master/OBLREACT">
                            <img src="./Programacion/REACT/babytracker.png" alt="" className="img-fluid rounded"></img>
                            <figcaption className="p-2">BabyTracker</figcaption>
                          </a>
                        </figure>
                        <p>App para control de bebés</p>
                        <p className="text-center">HTML, CSS, JS, REACT y librerías REACT</p>
                          <a target="_blank" rel="noopener noreferrer"className="githubButton rounded text-decoration-none" href="https://github.com/gastonvar/Portfolio/tree/master/OBLREACT">GitHub</a>
                        </article>
                        <article className="col-10 col-md-5 mb-3">
                        <figure>
                          <a target="_blank" rel="noopener noreferrer" href="https://gastonvar.github.io/PortfolioWebDeploy/">
                            <img src="./Programacion/PortfolioViejo/portfolioViejo.png" alt="" className="img-fluid rounded"></img>
                            <figcaption className="p-2">Mi portfolio anterior</figcaption>
                          </a>
                        </figure>
                        <p>Portfolio realizado con js, css y html</p>
                        <p className="text-center">HTML, CSS, JS</p>
                          <a target="_blank" rel="noopener noreferrer"className="githubButton rounded text-decoration-none" href="https://github.com/gastonvar/PortfolioWebDeploy">GitHub</a>
                        </article>
                        <article className="col-10 col-md-5 mb-3">
                        <figure>
                          <a target="_blank" rel="noopener noreferrer" href="https://github.com/gastonvar/VortexMacro/tree/main/AutoClicker">
                            <img src="./Programacion/P3/macro.png" alt="" className="img-fluid rounded"></img>
                            <figcaption className="p-2">AutoClicker</figcaption>
                          </a>
                        </figure>
                        <p>Me facilité la vida programando un macro para automatizar las descargas de NexusMods - Vortex</p>
                        <p className="text-center">C#</p>
                          <a target="_blank" rel="noopener noreferrer"className="githubButton rounded text-decoration-none" href="https://github.com/gastonvar/VortexMacro/tree/main/AutoClicker">GitHub</a>
                        </article>
                      <article className="col-10 col-md-5 mb-3">
                        <figure>
                          <a target="_blank" rel="noopener noreferrer" href="https://gv316838someeobl.somee.com/">
                            <img src="./Programacion/P3/API.png" alt="" className="img-fluid rounded"></img>
                            <figcaption className="p-2">API REST - MVC Consumidor de API REST</figcaption>
                          </a>
                        </figure>
                        <p>API REST desarrollada en C# .NET y EF para control de stock, MVC que consume los endpoints de la API</p><br></br>
                        <p className="text-center">C#, .NET, Razor, EF, Swagger, MVC, Html, Css, SQL</p>
                          <a target="_blank" rel="noopener noreferrer"className="githubButton rounded text-decoration-none" href="https://github.com/gastonvar/Portfolio/tree/master/Prog/ObligatorioP3">GitHub</a>
                        </article>
                      <article className="col-10 col-md-5 mb-3">
                        <figure>
                          <a target="_blank" rel="noopener noreferrer" href="https://gastonvar.github.io/PaginaCenso2023/">
                            <img src="./Programacion/CensoP1/wallpaper.png" alt="" className="img-fluid rounded"></img>
                            <figcaption className="p-2">Censo 2023</figcaption>
                          </a>
                        </figure>
                        <p>Sitio one-page para censistas con registro de dos tipos de usuario, permite hacer operaciones con censos.</p>
                        <p className="text-center">HTML, JS, CSS</p>
                        <a target="_blank" rel="noopener noreferrer"className="githubButton rounded text-decoration-none" href="https://github.com/gastonvar/Portfolio/tree/master/Prog/Censo_2023">GitHub</a>
                      </article>
                      <article className="col-10 col-md-5 mb-3">
                        <figure>
                          <a target="_blank" rel="noopener noreferrer" href="https://gv316838someeobl.somee.com/">
                            <img src="./Programacion/social.network/wallpaper.png" alt="" className="img-fluid rounded"></img>
                            <figcaption className="p-2">Social .NET-work</figcaption>
                          </a>
                        </figure>
                        <p>Red social con manejo de sesiones, posts, comentarios, reacciones, amistades, etc.</p>
                        <p className="text-center">HTML, CSS, C#, .NET, Razor</p>
                          <a target="_blank" rel="noopener noreferrer"className="githubButton rounded text-decoration-none" href="https://github.com/gastonvar/Portfolio/tree/master/Prog/Social.NETWORK">GitHub</a>
                        </article>
                    </div>
                  </div>
                </div>
                <div className="accordion-item" role="button">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Diseño Web <figure className="ms-2 justify-self-end"></figure>
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body row justify-content-center">
                      <p className="col-12 text-center" id="accordion-caption">Sitios one-page creados y diseñados siguiendo buenas prácticas de HTML / CSS y bootstrap.</p>
                      <article className="col-10 col-md-6 mb-4">
                        <figure>
                          <a target="_blank" rel="noopener noreferrer" href="" onclick="return false;">
                            <img src="./DisenoWeb/obligatorio.png" alt="" className="img-fluid rounded"></img>
                            <figcaption className="p-2">Baldur's Gate</figcaption>
                          </a>
                        </figure>
                        <a target="_blank" rel="noopener noreferrer"href="https://github.com/gastonvar/Portfolio/tree/master/DW/Baldur'sGate" className="githubButton rounded text-decoration-none">Github</a>
                      </article>
                      <article className="col-10 col-md-6 mb-4">
                        <figure>
                          <a target="_blank" rel="noopener noreferrer" href="" onclick="return false;">
                            <img src="./DisenoWeb/DominosPizza.png" alt="" className="img-fluid rounded"></img>
                            <figcaption className="p-2">Domino's Pizza</figcaption>
                          </a>
                        </figure>
                        <a target="_blank" rel="noopener noreferrer"className="githubButton rounded text-decoration-none text-center" href="https://github.com/gastonvar/Portfolio/tree/master/DW/DominosPizza">Github</a>
                      </article>
                      <article className="col-10 col-md-6 mb-4">
                        <figure>
                          <a target="_blank" rel="noopener noreferrer" href="" onclick="return false;">
                            <img src="./DisenoWeb/Muebles.png" alt="" className="img-fluid rounded"></img>
                            <figcaption className="p-2">Muebles</figcaption>
                          </a>
                        </figure>
                        <a target="_blank" rel="noopener noreferrer"className="githubButton rounded text-decoration-none text-center" href="https://github.com/gastonvar/Portfolio/tree/master/DW/Muebles2">Github</a>
                      </article>
                      <article className="col-10 col-md-6 mb-4">
                        <figure>
                          <a target="_blank" rel="noopener noreferrer" href="" onclick="return false;">
                            <img src="./DisenoWeb/Navidad.png" alt="" className="img-fluid rounded"></img>
                            <figcaption className="p-2">Navidad</figcaption>
                          </a>
                        </figure>
                        <a target="_blank" rel="noopener noreferrer"className="githubButton rounded text-decoration-none text-center" href="https://github.com/gastonvar/Portfolio/tree/master/DW/Navidad">Github</a>
                      </article>
                      <article className="col-10 col-md-6 mb-4">
                        <figure>
                          <a target="_blank" rel="noopener noreferrer" href="" onclick="return false;">
                            <img src="./DisenoWeb/Paris.png" alt="" className="img-fluid rounded"></img>
                            <figcaption className="p-2">Paris</figcaption>
                          </a>
                        </figure>
                        <a target="_blank" rel="noopener noreferrer"className="githubButton rounded text-decoration-none text-center" href="https://github.com/gastonvar/Portfolio/tree/master/DW/Paris">Github</a>
                      </article>
                      <article className="col-10 col-md-6 mb-4">
                        <figure>
                          <a target="_blank" rel="noopener noreferrer" href="" onclick="return false;">
                            <img src="./DisenoWeb/Pull&Bear.png" alt="" className="img-fluid rounded"></img>
                            <figcaption className="p-2">Pull & Bear</figcaption>
                          </a>
                        </figure>
                        <a target="_blank" rel="noopener noreferrer"className="githubButton rounded text-decoration-none text-center" href="https://github.com/gastonvar/Portfolio/tree/master/DW/Pull%26Bear">Github</a>
                      </article>
                      <article className="col-10 col-md-6 mb-4">
                        <figure>
                          <a target="_blank" rel="noopener noreferrer" href="" onclick="return false;">
                            <img src="./DisenoWeb/Wimbledon.png" alt="" className="img-fluid rounded"></img>
                            <figcaption className="p-2">Wimbledon</figcaption>
                          </a>
                        </figure>
                        <a target="_blank" rel="noopener noreferrer"className="githubButton rounded text-decoration-none text-center" href="https://github.com/gastonvar/Portfolio/tree/master/DW/Wimbledon">Github</a>
                      </article>
                    </div>
                  </div>
                </div>
                <div className="accordion-item" role="button">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" id="ultimo" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Base de datos <figure className="ms-2"></figure>
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body row justify-content-center">
                      <p className="col-12 text-center" id="accordion-caption">Proceso de diseño, creación y normalización de base de datos: MER-MR-SQL.</p>
                      <article className="col-10 col-md-6 mb-4">
                        <figure>
                          <a target="_blank" rel="noopener noreferrer" href="" onclick="return false;">
                            <img src="./BD/obligatorioPS/wallpaper.png" alt="" className="img-fluid rounded"></img>
                            <figcaption className="p-2">Red Social</figcaption>
                          </a>
                        </figure>
                        <p>Base de datos cuyo proceso de desarrollo consistió de un MER, MR, normalización y pasaje a tablas en SQLServer</p>
                        <a target="_blank" rel="noopener noreferrer"className="githubButton rounded text-decoration-none text-center" href="https://github.com/gastonvar/Portfolio/tree/master/BD/BDPS2023">Github</a>
                      </article>
                      <article className="col-10 col-md-6 mb-4">
                        <figure>
                          <a target="_blank" rel="noopener noreferrer" href="" onclick="return false;">
                            <img src="./BD/obligatorioPS/wallpaper.png" alt="" className="img-fluid rounded"></img>
                            <figcaption className="p-2">Restaurant Inspection</figcaption>
                          </a>
                        </figure>
                        <p>Base de datos SQL para control de inspecciones de restaurantes y base de datos en MongoDB para controlar conversaciones entre inspectores</p>
                        <a target="_blank" rel="noopener noreferrer"className="githubButton rounded text-decoration-none text-center" href="https://github.com/gastonvar/Portfolio/tree/master/BD/ObligatorioBD2">Github</a>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
        </section>
  )
}

export default Proyectos