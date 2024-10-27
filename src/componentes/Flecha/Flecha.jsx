import React from 'react';
import './Flecha.css';

const Flecha = ({ id }) => {
  const handleScroll = () => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id='flecha' onClick={handleScroll} className=''>
      <img src="./sprites/arrow.png" alt="Flecha para bajar" className='img-fluid' />
    </div>
  );
};

export default Flecha;
