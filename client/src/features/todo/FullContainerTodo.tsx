import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { useAppDispatch } from '../../store';

function FullContainerTodo(): JSX.Element {
  const quests = useSelector((store: RootState) => store.questReducer.quests);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({ type: 'QUEST_LOAD', payload: quests });
  }, [dispatch, quests]);

  return (
    <div className="">
      {quests &&
        quests.map((quest) => (
          <div className="flex justify-between">
            <div>{quest.title}</div>
            <button type="button" className="text-red-600">
              X
            </button>
          </div>
        ))}
    </div>
  );
}

export default FullContainerTodo;
