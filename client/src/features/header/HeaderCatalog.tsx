import React from 'react';
import SvgSelector from './HeaderSvgSelector';

type HeaderCatalogProps = {
  openAndCloseModal: () => void; // Определение типа для openModal
};

export default function HeaderCatalog({ openAndCloseModal }: HeaderCatalogProps): JSX.Element {
  const handleCatalogClick = (): void => {
    openAndCloseModal(); // Вызываем функцию openModal при нажатии на кнопку
  };

  return (
    <button
      type="button"
      onClick={handleCatalogClick} // Добавляем обработчик на клик
      className="flex justify-center items-center mr-8"
    >
      <SvgSelector id="svg_catalog" />
      <p className="ml-2 text-white">Каталог</p>
    </button>
  );
}
