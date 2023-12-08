import type Icon from './Icon';

type IconAction = {
  type: 'icons/init';
  payload: Icon[];
};

export default IconAction;
