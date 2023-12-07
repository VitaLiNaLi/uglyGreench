import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type TypeSubCategories from '../subCategory/redux/types/SubCategory';

type RouteParams = {
  id: string | undefined;
};

function SubCategoryParams(): JSX.Element {
  const { id } = useParams<RouteParams>(); // Извлекаем значение параметра id из URL

  const [products, setProducts] = useState<TypeSubCategories[]>([]);

  useEffect(() => {
    // Вызываем API, передавая id, чтобы получить категории
    if (id !== undefined) {
      fetch(`/api/sub/category/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          const newProducts = data as TypeSubCategories[];
          console.log(newProducts);
          setProducts(newProducts);
        })
        .catch((error) => console.error('Error fetching categories:', error));
    }
  }, [id]); // Зависимость useEffect - значение параметра id

  return (
    <div>
      {products &&
        products.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>{' '}
            {/* Отобразить свойство name конкретной категории внутри тега <p> */}
          </div>
        ))}
    </div>
  );
}

export default SubCategoryParams;
