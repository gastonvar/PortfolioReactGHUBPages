import React from 'react'
import './Footer.css'
import Waves from '../Waves/Waves'
const Footer = () => {
  return (
    <footer class="container-fluid py-3 col-12">
    <p class="text-center">© Sitio realizado por Gastón Varela</p>
    <a href="#" class="text-decoration-none p-1 rounded d-block text-center curriculumButton">Volver arriba</a>
    <Waves></Waves>
  </footer>
  )
}

export default Footer