import React from 'react';
import TopContainer from '../features/mainPage/TopContainer';
import JellyfishDestriction from '../features/mainPage/JellyfishDestriction';
import FullContainer from '../features/mainPage/FullContainer';



function MainPage(): JSX.Element {
  return (
    <div>
      <TopContainer />
      <FullContainer />
      <JellyfishDestriction />
    </div>
  );
}

export default MainPage;
