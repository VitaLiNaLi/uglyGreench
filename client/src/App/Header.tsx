import React from 'react';

import { Link } from 'react-router-dom';
import HeaderAuth from '../features/header/HeaderAuth';

export default function Header(): JSX.Element {
  return (
    <nav className="flex h-20 flex-col">
      <div className="flex h-full bg-blue-600 items-center px-4">
        <Link className="text-sky-300 font-bold text-2xl mr-8" to="/">
          Хочу наза XD
        </Link>
        <Link className="text-sky-300 font-bold text-2xl mr-8" to="/profile">
          Пряничный домик
        </Link>
        <HeaderAuth />
      </div>
    </nav>
  );
}
