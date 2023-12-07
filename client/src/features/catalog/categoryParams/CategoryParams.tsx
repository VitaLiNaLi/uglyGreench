import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type TypeSubCategories from '../subCategory/redux/types/SubCategory';

type RouteParams = {
  id: string | undefined;
};

function SubCategoryParams(): JSX.Element {
  const { id } = useParams<RouteParams>(); // Извлекаем значение параметра id из URL

  const [subCategoriesState, setSubCategoriesState] = useState<TypeSubCategories[]>();

  useEffect(() => {
    // Вызываем API, передавая id, чтобы получить категории
    fetch(`/api/category/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const newCategories = data as TypeSubCategories[];
        console.log(newCategories);
        setSubCategoriesState(newCategories);
      })
      .catch((error) => console.error('Error fetching categories:', error));
  }, [id]); // Зависимость useEffect - значение параметра id

  return (
    <div className="m-4">
      <div className="flex space-x-10 justify-center">
        {subCategoriesState &&
          subCategoriesState.map((subCategoryState) => (
            <a href={`/sub/category/${subCategoryState.id}`} key={subCategoryState.id}>
              <div className="w-96 h-80 overflow-hidden border-2 bg-black p-1 border-yellow-400 rounded-lg text-yellow-600 flex flex-col justify-between relative">
                <p className="p-4 text-center text-2xl z-10">{subCategoryState.name}</p>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                  }}
                >
                  {' '}
                  {/* Использование flexbox для центрирования изображения */}
                  <img
                    className="w-80 object-cover"
                    src={subCategoryState.img}
                    alt={subCategoryState.name}
                  />
                </div>
                {subCategoryState.img.endsWith('.png') && (
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="h-full w-full absolute top-0 left-0 border-4 border-yellow-600" />
                  </div>
                )}
              </div>
            </a>
          ))}
      </div>
    </div>
  );
}

export default SubCategoryParams;
