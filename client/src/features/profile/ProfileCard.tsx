import React from 'react';
import { useSelector } from 'react-redux';
import { type RootState } from '../../store';

function ProfileCard(): JSX.Element {
  const user = useSelector((store: RootState) => store.userReducer.user);
  console.log(user);
  return (
    <>
      {user && (
        <div className="profile-card" key={user.id}>
          <div className="profile-card_wrapper">
            <div className="profile-card_section">
              <img
                className="profile-img"
                src="https://avatars.dzeninfra.ru/get-zen_doc/1904927/pub_5e065539028d6800b27cbb8f_5e0655fe98fe7900aca0068c/scale_1200"
                alt="#"
              />
              <p className="profile-name">{user.name}</p>
              <p className="profile-surname">{user.surname}</p>
              <p className="profile-description">{user.description}</p>
              <form action="">
                <label>
                  <input type="text" placeholder="Ваши пожелания" />
                </label>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileCard;
