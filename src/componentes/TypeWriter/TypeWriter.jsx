import React, { useState, useEffect } from 'react';
import './TypeWriter.css';

const TypeWriter = () => {
  const words = ['Aprender', 'Crecer', 'Estudiar', 'Innovar', 'Desarrollar', 'Trabajar', 'Colaborar', 'Compartir', 'Investigar', 'Programar', 'Aportar'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      const updatedText = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        setPause(true);
        setTimeout(() => {
          setIsDeleting(true);
          setPause(false);
        }, 2000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setTypingSpeed(175);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, typingSpeed, words, currentWordIndex, pause]);

  return (
    <div className='typewriter-container col-12'>
      <p className='typewriter-text'>
        Quiero <span className='typewriter-span'>{text}</span>
        <span className='cursor'></span>
      </p>
    </div>
  );
};

export default TypeWriter;
