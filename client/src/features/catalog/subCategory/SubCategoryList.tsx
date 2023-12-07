import React from 'react';
import type TypeSubCategories from './redux/types/SubCategory';

function SubCategoryList({
  categoryName,
  subCategories,
}: {
  categoryName: string;
  subCategories: TypeSubCategories[];
}): JSX.Element {
  // console.log(subCategories);

  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h1 className="font-bold text-4xl">{categoryName}</h1>
          </td>
        </tr>
        {subCategories.map((subCategory) => (
          <tr key={subCategory.id}>
            <td className="w-1/4 rounded-lg p-2 transition-colors duration-300 ease-in-out hover:bg-gray-200">
              <a
                href={`/sub/category/${subCategory.id}`}
                className='block w-full h-full'
              >
                {subCategory.name}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SubCategoryList;
