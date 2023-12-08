import React from 'react';
// import { useSelector } from 'react-redux';
import ProfileCard from '../features/profile/ProfileCard';
// import {useAppDispatch, type RootState } from '../store';

function ProfilePage(): JSX.Element {
  return (
    <div className="profile-container">
      <ProfileCard />
    </div>
  );
}

export default ProfilePage;
