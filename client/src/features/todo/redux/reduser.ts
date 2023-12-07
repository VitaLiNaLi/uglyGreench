import { v4 as uuidv4 } from 'uuid';
import type Action from './types/Action';
import type State from './types/State';

export const initState: State = {
  quests: [],
};
// логика  изменения состояния
// eslint-disable-next-line @typescript-eslint/default-param-last
function reducer(state: State = initState, action: Action): State {
  switch (action.type) {
    case 'QUEST_LOAD':
      return {
        ...state,
        quests: action.payload,
      };
    case 'QUEST_ADD':
      return {
        ...state,
        quests: [...state.quests, { title: action.payload, id: uuidv4() }],
      };
    case 'QUEST_REMOVE':
      return {
        ...state,
        quests: state.quests.filter((quest) => quest.id !== action.payload),
      };

    default:
      return state;
  }
}

export default reducer;
