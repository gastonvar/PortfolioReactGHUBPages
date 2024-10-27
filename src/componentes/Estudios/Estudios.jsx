import React from 'react'
import './Estudios.css'

const Estudios = () => {
  return (
    <section className="row justify-content-center estudios mb-5">
      <aux id="estudios"></aux>
    <h2 className="col-12 text-center">Estudios</h2>
    <article className="col-12 col-md-8 mb-0">
      <h4>2023-Actualidad</h4>
        <p>Analista en tecnologías de la información - <span className="ORT">ORT Uruguay</span> - <span>Montevideo</span></p>
    </article>
    <figure className="col-12 col-md-8 text-center">
      <img src="./sprites/arrow.png" alt=""></img>
    </figure>
    <article className="col-12 col-md-8 mb-0">
      <h4>2022-2022</h4>
        <p>Ingeniería en sistemas - <span className="FING">Facultad de ingeniería UDELAR</span> - <span>Montevideo </span></p>
    </article>
    <figure className="col-12 text-center">
      <img src="./sprites/arrow.png" alt=""></img>
    </figure>
    <article className="col-12 col-md-8 mb-0">
      <h4>2019-2021</h4>
        <p>Bachillerato Orientación Físico / Matemática - <span className="LICEO">Liceo Santos Rabaquino Pacini</span> - <span>Santa Lucía, Canelones</span></p>
    </article>
    <figure className="col-12 text-center">
      <img src="./sprites/arrow.png" alt=""></img>
    </figure>
    <article className="col-12 col-md-8 mb-0">
      <h4>2016-2018</h4>
        <p>Ciclo Básico - <span className="LICEO">Liceo Nº2</span> - <span>Santa Lucía, Canelones</span></p>
    </article>
  </section>
  )
}

export default Estudios