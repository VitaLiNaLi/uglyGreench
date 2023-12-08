import React, { useEffect, useState } from 'react';
import video from '../../../public/videos/animation-mainPage.mp4';
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
      <video autoPlay loop muted playsInline className=" text-white rounded-md mb-8 mt-4">
        <source src={video} type="video/mp4" />
      </video>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-bold text-9xl">
        {texts.map((text, index) => (
          <p
            key={index}
            id={`animated${index}`}
            style={{
              display: index === currentTextIndex ? 'block' : 'none',
            }}
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}

export default FullContainer;
