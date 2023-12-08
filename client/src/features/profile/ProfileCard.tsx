import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { type RootState } from '../../store';
import * as api from '../../features/auth/api';

function ProfileCard(): JSX.Element {
  const [description, setDescription] = useState('');
  const user = useSelector((store: RootState) => store.userReducer.user);
  const dispatch = useDispatch();
  console.log(user);
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    api
      .updateProfile(description)
      .then((userData) => {
        dispatch({ type: 'user/updateInfo', payload: userData });
      })
      .catch((e: Error) => {
        console.error(e);
      });
  };
  return (
    <>
      {user && (
        <div className="profile-card" key={user.id}>
          <div className="profile-card_wrapper">
            <div className="profile-card_section">
              <img
                className="profile-img"
                src={user.icon}
                alt="#"
              />
              <p className="profile-name">{user.name}</p>
              <p className="profile-surname">{user.surname}</p>
              <form action="form" onSubmit={handleSubmit}>
                <textarea
                  type="text"
                  className="form-control"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  placeholder="Ваши пожелания"
                />
                <button
                  type="submit"
                  className="button btn btn-primary w-28 h-8 bg-green-400 rounded-full "
                  style={{ marginTop: '10px' }}
                >
                  отправить
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileCard;
