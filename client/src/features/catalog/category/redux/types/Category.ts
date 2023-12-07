import type TypeSubCategories from '../../../subCategory/redux/types/SubCategory';

type Category = {
  id: number;
  name: string;
  SubCategories: TypeSubCategories[];
};

export default Category;
