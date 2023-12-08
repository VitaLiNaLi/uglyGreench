import type User from './User';

type AuthAction =
  | {
      type: 'user/login';
      payload: User;
    }
  | {
      type: 'user/check';
      payload: User;
    }
  | {
      type: 'user/logout';
    }
  | {
      type: 'user/register';
      payload: User;
    }
  | {
      type: 'user/updateInfo';
      payload: User;
    };

export default AuthAction;
