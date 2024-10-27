import React, { useEffect, useRef, useState } from 'react';

import './Robot.css';

const Robot = () => {
  const [robotSrc, setRobotSrc] = useState('./sprites/robot.png');
  const robotRef = useRef(null);
  const anchorRef = useRef(null);
  const eyesRef = useRef([]);


  const handleMouseEnter = () => {
    setRobotSrc('./sprites/robot.png'); 
  };

  const handleMouseLeave = () => {
    setRobotSrc('./sprites/robot.png'); 
  };
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!anchorRef.current) return; 

      const rekt = anchorRef.current.getBoundingClientRect();
      const anchorX = rekt.left + rekt.width / 2;
      const anchorY = rekt.top + rekt.height / 2 - 40;
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const angleDeg = calculateAngle(mouseX, mouseY, anchorX, anchorY);

      eyesRef.current.forEach((eye) => {
        if (eye) {
          eye.style.transform = `rotate(${90 + angleDeg}deg)`;
        }
      });
    };

    const calculateAngle = (cx, cy, ex, ey) => {
      const dy = ey - cy;
      const dx = ex - cx;
      const rad = Math.atan2(dy, dx);
      const deg = (rad * 180) / Math.PI;
      return deg;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); 



  useEffect(() => {
    const miDiv = robotRef.current;
    setTimeout(() => {
      if (miDiv) miDiv.classList.add('show');
    }, 1000);
  }, []);

  return (
    <div className='robotdiv col-12 mb-0 row'>
    <figure className="text-center htmlopen d-none d-lg-block">
        <img src="./sprites/html_open.png" alt="" className="img-fluid"></img>
      </figure>
    <div className="robot row my-0 py-0" id="eyes" ref={robotRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <figure className="col-12">
        <img
            ref={anchorRef}
            id="anchor"
            src={robotSrc}
            alt="Robot"
            className=""
          />
          <img
            ref={(el) => (eyesRef.current[0] = el)}
            src="./sprites/ojo.png"
            className="eye "
            style={{ top: '38px', left: '51px' }}
            alt="Ojo"
          />
          <img
            ref={(el) => (eyesRef.current[1] = el)}
            src="./sprites/ojo.png"
            className="eye "
            style={{ top: '38px', left: '119px' }}
            alt="Ojo"
          />
        </figure>
      </div>
      <figure className="text-center htmlopen d-none d-lg-block">
        <img src="./sprites/html_closed.png" alt="" className="img-fluid"></img>
      </figure>
    </div>
  );
};

export default Robot;
