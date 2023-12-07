import React from 'react';

function Loading(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="border-4 border-gray-200 border-t-4 border-blue-500 rounded-full w-16 h-16 animate-spin" />
      <p className="mt-2">Идет загрузка...</p>
    </div>
  );
}

export default Loading;
