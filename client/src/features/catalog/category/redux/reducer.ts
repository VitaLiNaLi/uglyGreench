import type Action from './types/CategoryAction';
import type CategoryState from './types/CategoryState';

export const initState: CategoryState = {
  categories: [],
};
// логика  изменения состояния
function reducer(state: CategoryState = initState, action: Action): CategoryState {
  switch (action.type) {
    case 'categories/load':
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
