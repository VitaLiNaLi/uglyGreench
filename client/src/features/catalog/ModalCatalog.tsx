import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import type TypeCategory from './category/redux/types/Category';
import { useAppDispatch, type RootState } from '../../store';
import CategoryList from './category/CategoryList';

function ModalCatalog(): JSX.Element {
  const categoryList = useSelector((store: RootState) => store.categoryReducer.categories);

  // dispatch нам нужен, чтобы менять стор(стейт)
  const dispatch = useAppDispatch(); // это наш типизированный useDispatch

  useEffect(() => {
    fetch('/api/categories')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const newCategories = data.categories as TypeCategory[];
        console.log(newCategories);
        dispatch({ type: 'categories/load', payload: newCategories });
      })
      .catch((error) => console.error('Error fetching categories:', error));
  }, [dispatch]);

  return (
    <div className="min-h-screen flex">
      <div className="w-full mx-auto p-4 bg-white text-black">
        <CategoryList categories={categoryList} />
      </div>
    </div>
  );
}

export default ModalCatalog;
