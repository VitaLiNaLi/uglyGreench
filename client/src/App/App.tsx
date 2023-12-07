import React from 'react';
import { Route, Routes } from 'react-router';
import Main from './MainPage';
import SplashScreen from './SplashScreen';
import Layout from './Layout';
import LoginPage from '../features/auth/LoginPage';
import RegisterPage from '../features/auth/RegisterPage';
import ProfilePage from '../features/auth/ProfilePage';
import TodoPage from '../features/todo/Todo';
import SubCategoryParams from '../features/catalog/subCategoryParams/SubCategoryParams';
import CategoryParams from '../features/catalog/categoryParams/CategoryParams';
import './App.css';
import 'tailwindcss/tailwind.css';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route element={<Layout />}>
        <Route path="/main" element={<Main />} />
        <Route path="/category/:id" element={<CategoryParams />} />
        <Route path="/sub/category/:id" element={<SubCategoryParams />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
