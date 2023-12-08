import type Icon from '../../../icon/redux/types/Icon';

type Friend = {
  name: string;
  surname: string;
  icon: Icon;
  description?: string;
};

export default Friend;
