type User = {
  id: number;
  name: string;
  surname: string;
  email: string;
  icon: string;
  password: string;
  description?: string;
};

export type UserWithoutId = Omit<User, 'id'>;

export default User;
