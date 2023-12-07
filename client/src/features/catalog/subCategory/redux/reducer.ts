import type Action from './types/SubCategoryAction';
import type SybCategoryState from './types/SubCategoryState';

export const initState: SybCategoryState = {
  sybcategories: [],
};
// логика  изменения состояния
function reducer(state: SybCategoryState = initState, action: Action): SybCategoryState {
  switch (action.type) {
    case 'subCategories/load':
      return {
        ...state,
        sybcategories: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
