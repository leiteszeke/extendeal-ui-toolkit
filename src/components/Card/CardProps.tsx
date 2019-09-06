export interface CardProps {
  classes?: {
    body?: string;
    email?: string;
    image?: string;
    name?: string;
    phone?: string;
    role?: string;
    thumbnail?: string;
    wrapper?: string;
  };
  email: string;
  image?: string;
  name: string;
  phone?: string;
  role: string;
  show?: boolean;
}

export const defaultProps = {
  classes: {
    body: '',
    email: '',
    image: '',
    name: '',
    phone: '',
    role: '',
    thumbnail: '',
    wrapper: '',
  },
  show: true,
};
