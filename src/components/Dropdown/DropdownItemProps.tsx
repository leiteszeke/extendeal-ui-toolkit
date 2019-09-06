// Props
import AcromathicColorProps from '../Colors/Acromathic/AcromathicColorProps';
// Components
import { Gray } from '../Colors/Acromathic/Gray';

export interface DropdownItemProps {
  children: React.ReactNode;
  classes?: DropdownItemClasses;
  color?: AcromathicColorProps;
  onClick?: Function;
  separator?: boolean;
}

export interface DropdownItemClasses {
  item?: string;
  separator?: string;
}

export const defaultProps = {
  classes: {
    item: '',
    separator: '',
  },
  color: Gray,
};
