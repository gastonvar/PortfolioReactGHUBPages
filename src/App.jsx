import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Componentes/Header/Header.jsx'
import Regla from './componentes/Regla/Regla.jsx'
import './App.css'
import Hero from './componentes/Hero/Hero.jsx'
import Presentacion from './componentes/Presentacion/Presentacion.jsx'
import Proyectos from './componentes/Proyectos/Proyectos.jsx'
import Estudios from './componentes/Estudios/Estudios.jsx'
import Contacto from './componentes/Contacto/Contacto.jsx'
import Footer from './componentes/Footer/Footer.jsx'
import Waves from './componentes/Waves/Waves.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Hero></Hero>
      <Presentacion></Presentacion>
    </div>
  )
}

export default App
