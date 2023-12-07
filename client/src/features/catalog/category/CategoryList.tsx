import React, { useState } from 'react';

import type CategoryType from './redux/types/Category';
import SubCategoryList from '../subCategory/SubCategoryList';

function CategoryList({ categories }: { categories: CategoryType[] }): JSX.Element {
  const [activeCategory, setActiveCategory] = useState<CategoryType | null>(null);

  const handleCategoryHover = (category: CategoryType): void => {
    setActiveCategory(category);
  };

  const handleCategoryLeave = (): void => {
    setActiveCategory(null);
  };

  return (
    <div className="flex">
      <div className="w-1/6">
        <table>
          <tbody>
            <tr>
              <td
                className="w-screen font-bold 
                text-2xl rounded-lg p-2 transition-colors duration-300 ease-in-out hover:bg-gray-200"
                onMouseEnter={handleCategoryLeave}
              >
                MAX SALE
              </td>
            </tr>
            {categories.map((category) => (
              <tr
                key={category.id}
                className="hover:bg-gray-100"
                onMouseEnter={() => handleCategoryHover(category)}
                // onMouseLeave={handleCategoryLeave}
              >
                <td className="w-screen text-lg rounded-lg p-2 transition-colors duration-300 ease-in-out hover:bg-gray-200">
                  <a href={`/category/${category.id}`} className="block w-full h-full">
                    {category.name}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-3/5">
        {activeCategory && (
          <SubCategoryList
            categoryName={activeCategory.name}
            subCategories={activeCategory.SubCategories}
          />
        )}
      </div>
    </div>
  );
}

export default CategoryList;
