import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import HeaderAuth from '../features/header/HeaderAuth';
import HeaderCatalog from '../features/header/HeaderCatalog';
import ModalCatalog from '../features/catalog/ModalCatalog';

export default function Header(): JSX.Element {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden'; // Убираем полосу прокрутки при открытом модальном окне
    } else {
      document.body.style.overflow = 'visible'; // Возвращаем полосу прокрутки, когда модальное окно закрыто
    }
  }, [modalOpen]);

  const openAndCloseModal = (): void => {
    setModalOpen((prev) => !prev); // Инвертируем значение состояния
  };

  return (
    <>
      <nav className="flex h-20 flex-col">
        <div className="flex h-full bg-blue-600 items-center px-4">
          <Link className="text-sky-300 font-bold text-2xl mr-8" to="/">
            Хочу наза XD
          </Link>
          <Link className="text-sky-300 font-bold text-2xl mr-8" to="/profile">
            Пряничный домик
          </Link>
          <HeaderCatalog openAndCloseModal={openAndCloseModal} />
          <HeaderAuth />
        </div>
      </nav>
      {modalOpen && <ModalCatalog />}
    </>
  );
}
