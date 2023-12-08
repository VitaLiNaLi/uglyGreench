import React from 'react';
import type TypeIcon from './redux/types/Icon';

type ModalIconProps = {
  openAndCloseModal: () => void;
  iconAvatar: TypeIcon;
};

function ModalIcon({ openAndCloseModal, iconAvatar }: ModalIconProps): JSX.Element {
  const handleCatalogClick = (): void => {
    openAndCloseModal(); // Вызываем функцию openModal при нажатии на кнопку
  };
  console.log(iconAvatar);

  return (
    <div className="flex justify-center items-center mt-8 mb-8">
      <button
        type="button"
        onClick={handleCatalogClick}
        className="bg rounded-full w-24 h-12 flex justify-center items-center"
      >
        {iconAvatar && iconAvatar.src && <img src={iconAvatar.src} alt={iconAvatar.alt} />}
      </button>
    </div>
  );
}

export default ModalIcon;
