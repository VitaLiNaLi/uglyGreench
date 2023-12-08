import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import Main from './MainPage';
import SplashScreen from './SplashScreen';
import Layout from './Layout';
import LoginPage from '../features/auth/LoginPage';
import RegisterPage from '../features/auth/RegisterPage';
import './App.css';
import "../features/profile/Profile.css"
import 'tailwindcss/tailwind.css';
import ProfilePage from './ProfilePage';
import { useAppDispatch } from '../store';
import type User from '../features/auth/redux/types/User';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch('/api/auth/check')
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'success') {
          const userData: User = data.user;
          dispatch({ type: 'user/login', payload: userData });
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route element={<Layout />}>

        <Route path="/main" element={<Main />} /> 

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
