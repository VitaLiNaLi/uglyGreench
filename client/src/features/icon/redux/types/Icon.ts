type Icon = {
  id: number;
  src: string;
  alt: string;
};

export type IconWithoutId = Omit<Icon, 'id'>;

export default Icon;
