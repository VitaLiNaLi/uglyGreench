import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { type RootState } from '../../store';

export default function HeaderAuth(): JSX.Element {
  const { user, isLoggedIn } = useSelector((store: RootState) => store.userReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout: React.MouseEventHandler<HTMLButtonElement> = () => {
    fetch('/api/auth/logout')
      .then((response) => {
        if (response.ok) {
          dispatch({ type: 'user/logout' });
          navigate('/');
        }
      })
      .catch((error: Error) => console.log(error.message));
  };
  console.log(isLoggedIn, user);

  return (
    <>
      <div className="flex-1" />
      <div className="flex items-center">
        {isLoggedIn && user ? (
          <button onClick={handleLogout} type="button">
            выйти
          </button>
        ) : (
          <div>
            <Link to="/register">
              <button type="button" className="text-white p-2  hover:bg-indigo-500">
                регистрация
              </button>
            </Link>
            <Link to="/login">
              <button type="button" className="text-white  p-2  hover:bg-indigo-500">
                войти
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
