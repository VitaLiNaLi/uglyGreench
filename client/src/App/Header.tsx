import React from 'react';


import { Link, useLocation } from 'react-router-dom';

import HeaderAuth from '../features/header/HeaderAuth';

export default function Header(): JSX.Element {
  const location = useLocation();

  return (
    <header className="flex h-20 flex-col">
      <div className="flex h-full bg-blue-600 items-center px-4">
        <Link className="text-sky-300 font-bold text-2xl mr-8" to="/">

          Хочу к снеговику
        </Link>
        <div className="flex-1" />
        {location.pathname === '/main' ? (
          <Link className="text-sky-300 font-bold text-2xl mr-8" to="/profile">
            Пряничный домик
          </Link>
        ) : (
          <Link className="text-sky-300 font-bold text-2xl mr-8" to="/main">
            Праздничное настроение
          </Link>
        )}

        <HeaderAuth />
      </div>
    </header>
  );
}
