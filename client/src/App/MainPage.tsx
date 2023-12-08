import React from 'react';
import TopContainer from '../features/mainPage/TopContainer';
import JellyfishDestriction from '../features/mainPage/JellyfishDestriction';
import FullContainer from '../features/mainPage/FullContainer';
import FishDisctraction from '../features/mainPage/FishDisctraction';


function MainPage(): JSX.Element {
  return (
    <div>
      <TopContainer />
      <FullContainer />
      <JellyfishDestriction />
      <FishDisctraction />
    </div>
  );
}

export default MainPage;
