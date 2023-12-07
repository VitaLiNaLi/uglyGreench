import type Category from './Category';

type CategoryAction = {
  type: 'categories/load';
  payload: Category[];
};

export default CategoryAction;
