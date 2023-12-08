import React from 'react';
import type TypeIcon from './redux/types/Icon';

type ModalIconProps = {
  openAndCloseModal: () => void;
  icon: TypeIcon;
};

function ModalIcon({ openAndCloseModal, icon }: ModalIconProps): JSX.Element {
  const handleCatalogClick = (): void => {
    openAndCloseModal(); // Вызываем функцию openModal при нажатии на кнопку
  };
  console.log(icon);

  return (
    <div className="flex justify-center items-center mt-8 mb-8">
      <button
        type="button"
        onClick={handleCatalogClick}
        className="bg rounded-full w-24 h-12 flex justify-center items-center"
      >
        {icon && icon.src && <img src={icon.src} alt={icon.alt} />}
      </button>
    </div>
  );
}

export default ModalIcon;
