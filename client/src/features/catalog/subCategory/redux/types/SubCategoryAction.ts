import type SybCategory from './SubCategory';

type SybCategoryAction = {
  type: 'subCategories/load';
  payload: SybCategory[];
};

export default SybCategoryAction;
