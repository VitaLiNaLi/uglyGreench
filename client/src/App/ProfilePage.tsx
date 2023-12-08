import React from 'react';
// import { useSelector } from 'react-redux';
import ProfileCard from '../features/profile/ProfileCard';
// import {useAppDispatch, type RootState } from '../store';

function ProfilePage(): JSX.Element {
  return (
    <div className="animate-fade-up animate-once animate-delay-[8ms] animate-ease-linear profile-container">
      <ProfileCard />
    </div>
  );
}

export default ProfilePage;
