// Props
import { PrimaryColorProps } from '../Colors/Primary/PrimaryColorProps';
// Components
import { Gray } from '../Colors/Acromathic/Gray';

export interface DropdownProps {
  active: boolean;
  alignRight?: boolean;
  alignTop?: boolean;
  children?: React.ReactNode;
  classes?: DropdownClasses;
  color?: PrimaryColorProps;
  identifier?: string;
  icon?: string;
  lastElement?: boolean;
  materialIcon?: string;
  newContainer?: string;
  onClick?: Function;
  size?: string;
  text?: string;
  withButton?: boolean;
}

export interface DropdownClasses {
  button?: string;
  menu?: string;
  text?: string;
  wrapper?: string;
}

export const defaultProps = {
  active: false,
  classes: {
    button: '',
    menu: '',
    text: '',
    wrapper: '',
  },
  color: Gray,
  identifier: `ExtDropdown_${ new Date().getMilliseconds() }`,
  withButton: true,
};
