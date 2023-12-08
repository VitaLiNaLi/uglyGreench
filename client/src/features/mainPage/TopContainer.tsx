import React, { useState } from 'react';
import './TopContainer.css';
import SantaWOOO from '../../../public/img/SantaWOOO.png';
import MerryChristmas from '../../../public/img/MerryChristmas.png';

function TopContainer(): JSX.Element {
  const [showSanta, setShowSanta] = useState(MerryChristmas);
  const [showHoHoHo, setShowHoHoHo] = useState(false);

  const handleButtonClick = (): void => {
    setShowSanta(SantaWOOO);
    setShowHoHoHo(true);
  };

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div style={{ position: 'relative' }}>
        <button
          type="button"
          onClick={handleButtonClick}
          className="p-0 m-0" // Убираем внутренние и внешние отступы у кнопки
        >
          <img
            src={showSanta}
            alt="Christmas"
            className="w-80 h-80 rounded-full mt-16 mb-4" // Увеличиваем отступ сверху до 8 пикселей
          />
        </button>
        {showHoHoHo && (
          <p
            className="text-red-500 text-4xl font-bold" // Изменяем размер и стиль текста
            style={{ position: 'absolute', top: '16px', right: '16px' }} // Перемещаем текст над изображением
          >
            ХО-ХО-ХО
          </p>
        )}
      </div>
      <p className="text-2xl font-bold">Начнем праздник!!!</p>
    </div>
  );
}

export default TopContainer;
