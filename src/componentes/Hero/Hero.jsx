import React from 'react'
import './Hero.css'
import Robot from '../Robot/Robot'
import TypeWriter from '../TypeWriter/TypeWriter'
import Flecha from '../Flecha/Flecha'
import Header from '../Header/Header'

const Hero = () => {
  return (
    <div className='herodiv col-12 row'>
        <Header></Header>
        <Robot></Robot>
        <TypeWriter></TypeWriter>
        <Flecha id={"sobreMi"}></Flecha>
    </div>
  )
}

export default Hero