// Props
import { PrimaryColorProps } from '../Colors/Primary/PrimaryColorProps';
// Components
import { Milhouse } from '../Colors/Primary/Milhouse';

export interface SelectProps {
  autoHide?: boolean;
  classes?: SelectClasses;
  color?: PrimaryColorProps;
  items: Array<SelectOptionProps>;
  name: string;
  onClose?: Function;
  onSelect?: Function;
  onToggle?: Function;
  opened?: boolean;
  placeHolder?: string;
  selected?: SelectOptionProps;
}

export interface SelectOptionProps {
  classes?: SelectOptionClasses;
  label: string;
  selected?: boolean;
  value: string | number;
}

export interface SelectClasses {
  input?: string;
  options?: string;
  selected?: string;
  wrapper?: string;
}

export interface SelectOptionClasses {
  label?: string;
  option?: string;
}

export const defaultProps = {
  classes: {
    input: '',
    options: '',
    selected: '',
    wrapper: '',
  },
  color: Milhouse,
  opened: false,
};
