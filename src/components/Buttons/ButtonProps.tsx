// Components
import { Milhouse } from '../Colors/Primary/Milhouse';
import { ReactNode } from 'react';

export interface ButtonProps {
  children?: ReactNode;
  classes?: {
    wrapper?: string;
  };
  color?: object;
  disabled?: boolean;
  label?: string;
  noMargin?: string;
  onClick?: Function;
  secondaryColor?: string;
  variant?: string;
}

export const defaultProps = {
  classes: {
    wrapper: '',
  },
  color: Milhouse,
  disabled: false,
  noMargin: '',
  variant: 'classic',
};
