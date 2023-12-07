import type Quest from './Quest';

type Action =
  | {
      type: 'QUEST_LOAD';
      payload: Quest[];
    }
  | {
      type: 'QUEST_ADD';
      payload: string;
    }
  | {
      type: 'QUEST_REMOVE';
      payload: Quest['id'];
    };

export default Action;
