import type Action from './types/Action';
import type State from './types/State';

export const initState: State = {
  Profile: {};
};

function reducer(state: State = initState, action: Action): State {
  switch (action.type) {
    case 'profile/load':
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
