import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import * as api from './api';
import type TypeIcon from '../icon/redux/types/Icon';
import type { RootState } from '../../store';
import type Icon from '../icon/redux/types/Icon';

export default function RegisterPage(): JSX.Element {
  const [icon, setIcon] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeat, setRepeat] = useState('');
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    setError(null);

    event.preventDefault();

    if (password !== repeat) {
      setError('Оба введенных пароля должны быть идентичны');
      return;
    }

    if (icon === '' || name === '' || surname === '' || email === '' || password === '') {
      setError('Заполните все поля');
      return;
    }

    api
      .register({ name, surname, email, password, icon })
      .then((data) => {
        // назначаем в глобальном сторе вновь зарегистрированного юзера
        dispatch({ type: 'user/login', payload: data });

        // переадресовываем человека на страницу входа
        navigate('/main');
        // P.S. тут можно не переадресовывать, а показывать кнопку Войти или что-то другое
      })
      .catch((e: Error) => {
        console.error(e);
        setError(e.message);
      });
  };

  useEffect(() => {
    fetch('/api/icons')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const newIcons = data.icons as TypeIcon[];
        console.log(newIcons);
        dispatch({ type: 'icons/init', payload: newIcons });
      })
      .catch((error) => console.error('Error fetching categories:', error));
  }, [dispatch]);

  const icons = useSelector((store: RootState) => store.iconsReducer.icons);

  return (
    <div className="register-bg w-full max-w-xs mx-auto mt-5">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          {icons.map((icon: Icon) => (
            <tr
              key={icon.id}
              className="hover:bg-gray-100"
              // onMouseEnter={() => handleCategoryHover(icon)}
              // onMouseLeave={handleCategoryLeave}
            >
              <td className="w-screen text-lg rounded-lg p-2 transition-colors duration-300 ease-in-out hover:bg-gray-200">
                <img src={icon.src} alt={icon.alt} />
              </td>
            </tr>
          ))}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Картинка
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="icon"
              type="text"
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
            />
          </div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="login">
            Имя
          </label>
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Фамилия
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="surname"
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Пароль
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Повторите пароль
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            value={repeat}
            onChange={(e) => setRepeat(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Регистрация
          </button>
        </div>
        {error && <div className="text-red-700">{error}</div>}
      </form>
    </div>
  );
}
