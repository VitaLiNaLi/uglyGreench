import React, { useState } from 'react';
import { useAppDispatch } from '../../store';

function InputTodo(): JSX.Element {
  const [title, setTitle] = useState('');
  const dispatch = useAppDispatch();
  const handleAdd = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch({ type: 'QUEST_ADD', payload: title });
    setTitle('');
  };

  return (
    <div className="flex justify-between items-center gap-8">
      <form onSubmit={handleAdd}>
        <input
          className="text-gray-950 bg-gray-200 rounded-md p-2"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button className="bg-blue-500 text-white rounded-md p-2" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default InputTodo;
