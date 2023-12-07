import React from 'react';
import { useSelector } from 'react-redux';
import { type RootState } from '../../store';

function ProfileCard(): JSX.Element {
  const user = useSelector((store: RootState) => store.userReducer.user);
  console.log(user);
  return (
    <>
      {user && (
        <div className="" key={user.id}>
          <img src={user.icon} alt="#" />
          <p>{user.name}</p>
          <p>{user.surname}</p>
          <p>{user.description}</p>
        </div>
      )}
    </>
  );
}

export default ProfileCard;
