import React, { useEffect, useState } from 'react';
import video from '../../../public/videos/jellyfish.mp4';

function JellyfishDescription(): JSX.Element {
  const [showContainer, setShowContainer] = useState(false);
  const halfScreenHeight = window.innerHeight / 2;

  const handleScroll = (): void => {
    const videoOffset = document.getElementById('jellyfish-video')?.getBoundingClientRect().top || 0;
    if (videoOffset < halfScreenHeight) {
      setShowContainer(true);
      window.removeEventListener('scroll', handleScroll); // Убрать обработчик прокрутки после показа контейнера
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex justify-between p-24">
      {showContainer && (
        <div className="w-1/2" id="jellyfish-video">
          <video autoPlay loop muted playsInline className="rounded-md w-3/5 mt32">
            <source src={video} type="video/mp4" />
          </video>
        </div>
      )}
      <div className="w-2/5 font-serif">
        <p className="font-bold text-4xl mb-4">
          Приглашаем вас в уникальный мир подводной красоты!
        </p>
        <p className="text-2xl leading-9">
          Наш сайт - это виртуальная гавань для всех поклонников океана и морской жизни. <br />
          Погрузитесь в удивительное путешествие по глубинам, где бескрайние воды превращаются в дочный мир, исполненный света и цвета. <br />
          Откройте себе захватывающие фотографии и видео потрясающих морских обитателей, узнайте об их поведении, уникальных адаптациях и ролях в экосистеме. <br />
          Обогатите свои познания об удивительной подводной флоре и фауне, а также обсудите последние новости исследований в области океанографии. <br />
          Добро пожаловать в мир чудес и волнений подводного мира!
        </p>
      </div>
    </div>
  );
}

export default JellyfishDescription;
