import type Profile from "./Profile";

type Action = 
  | {
    type: 'profile/load';
    payload: Profile;
  }

export default Action;  