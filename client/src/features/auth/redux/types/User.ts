import type Icon from '../../../icon/redux/types/Icon';

type User = {
  id: number;
  name: string;
  surname: string;
  email: string;
  icon: Icon;
  password: string;
  description?: string;
};

export type UserWithoutId = Omit<User, 'id'>;

export default User;
