import React, { useEffect, useState } from 'react';
import './FullContainer.css';
import 'animate.css';

function FullContainer(): JSX.Element {
  const texts = ['Морская тайна', 'Погружение', 'Океаническое путешествие'];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [texts.length]);

  useEffect(() => {
    const element = document.getElementById(`animated${currentTextIndex}`);
    if (element) {
      element.classList.remove('animate__fadeOut');
      element.classList.add('animate__fadeIn');

      // Убираем класс анимации после 1 секунды
      setTimeout(() => {
        element.classList.remove('animate__fadeIn');
        element.classList.add('animate__fadeOut');
      }, 3000);
    }
  }, [currentTextIndex]);

  return (
    <div className="w-full flex justify-center relative">

    </div>
  );
}

export default FullContainer;
