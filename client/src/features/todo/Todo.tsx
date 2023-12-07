import React from 'react';
import InputTodo from './InputTodo';
import FullContainerTodo from './FullContainerTodo';

function Todo(): JSX.Element {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-24 bg-blue-600">
        <InputTodo />
        <FullContainerTodo />
      </div>
    </div>
  );
}

export default Todo;
