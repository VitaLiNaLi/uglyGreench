import React from 'react';
import type Profile from './redux/types/Profile';
import { type RootState, useAppDispatch } from '../../store';

type ProfilePropsType = {
  profile: Profile[];
};
function ProfileCard({ profile }: ProfilePropsType): JSX.Element {
  const profile = useSelector((store:RootState) => store.reducerProfile.profile);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="" key={profile.id}>
        <img src={profile.icon} alt="" />
        <p>{profile.name}</p>
        <p>{profile.surname}</p>
        <p>{profile.description}</p>
      </div>
    </>
  );
}

export default ProfileCard;
