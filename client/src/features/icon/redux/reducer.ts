import type IconAction from './types/IconAction';
import type IconState from './types/IconState';

export const initState: IconState = {
  icons: [],
};
// логика  изменения состояния
function reducer(state: IconState = initState, action: IconAction): IconState {
  switch (action.type) {
    case 'icons/init':
      return {
        ...state,
        icons: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
