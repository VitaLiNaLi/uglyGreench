import React, { useState, useEffect } from 'react';
import './TopContainer.css';

function TopContainer(): JSX.Element {
  const [images, setImages] = useState<string[]>([]);
  const [selectedImageIndices, setSelectedImageIndices] = useState<(number | 'text')[]>(
    Array(5).fill(0),
  );
  const [clickedIndices, setClickedIndices] = useState<number[]>([]); // Новое состояние для отслеживания нажатых изображений

  useEffect(() => {
    const fetchImages = async (): Promise<void> => {
      try {
        const response = await fetch('/api/imagesList');
        if (response.ok) {
          const data = await response.json();
          setImages(data.images);
        } else {
          console.error('Ошибка при получении изображений:', response.status);
        }
      } catch (error) {
        console.error('Ошибка fetch запроса:', error);
      }
    };

    fetchImages();
  }, []);

  function handleImageClick(index: number): void {
    if (!clickedIndices.includes(index)) {
      setClickedIndices([...clickedIndices, index]); // Добавить индекс нажатого изображения в состояние
      let currentIndex = 0; // Установка начального индекса
      const intervalId = setInterval(() => {
        currentIndex += 1; // Обновление текущего индекса
        setSelectedImageIndices((prevIndices) => {
          const newSelectedImageIndices = [...prevIndices];
          if (currentIndex < images.length) {
            newSelectedImageIndices[index] = currentIndex; // Обновление только одного индекса
          } else {
            newSelectedImageIndices[index] = 'text';
            clearInterval(intervalId);
          }
          // console.log(currentIndex);
          return newSelectedImageIndices; // Возврат нового состояния индексов
        });
      }, 100); // Переключение каждую 100 миллисекунд
    }
  }

  return (
    <div className="flex justify-center w-full">
      <div className="absolute z-10 w-3/4 flex justify-around p-5">
        {selectedImageIndices.map((selectedIndex, index) => (
          <div key={index} className="container">
            {typeof selectedIndex === 'number' ? (
              <img
                src={images[selectedIndex]}
                alt={`Картинка ${index + 1}`}
                key={index}
                role="presentation"
                onClick={() => handleImageClick(index)}
                onDragStart={(e) => e.preventDefault()}
                className="bubble-container mb-4 mt-4 animated-image"
              />
            ) : (
              <p key={index}>Текст</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopContainer;
