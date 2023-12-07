import React from 'react';
import TopContainer from '../features/mainPage/TopContainer';
import JellyfishDestriction from '../features/mainPage/JellyfishDestriction';
import FullContainer from '../features/mainPage/FullContainer';
import FishDisctraction from '../features/mainPage/FishDisctraction';
import ProfilePage from '../features/auth/ProfilePage';


function MainPage(): JSX.Element {
  return (
    <div>
      <TopContainer />
      <FullContainer />
      <JellyfishDestriction />
      <FishDisctraction />
      <ProfilePage />
    </div>
  );
}

export default MainPage;
