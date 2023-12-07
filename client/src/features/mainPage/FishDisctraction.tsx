import React from 'react';
import video from '../../../public/videos/more-fish.mp4';

function FishDisctraction(): JSX.Element {
  return (
    <div className="flex justify-between p-24">
      <div className="w-2/5 font-serif">
        <p className="font-bold text-4xl mb-4">
          Мы предоставляем уникальное погружение в удивительный мир подводных глубин.
        </p>

        <p className="text-2xl leading-9">
          Наши страницы наполнены захватывающей информацией, потрясающими изображениями, 3D моделями
          подводных жителей и полезными советами. <br />
          Мы стремимся поделиться всей красотой и разнообразием подводной жизни, чтобы вдохновить и
          образовать наших посетителей. <br />
          Наша команда экспертов по подводной съемке и экологии гарантирует, что каждый посетитель
          нашего ресурса получит уникальный и захватывающий опыт, приятно удивляющий
        </p>
      </div>
      <div className="w-1/3">
        <video autoPlay loop muted playsInline className="rounded-md  mt-20">
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default FishDisctraction;
