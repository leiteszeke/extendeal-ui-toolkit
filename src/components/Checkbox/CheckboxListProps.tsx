// Props
import { CheckboxProps, CheckboxClasses } from './CheckboxProps';
import { SingleDialogProps } from '../SingleDialog/SingleDialogProps';

export interface CheckboxListProps {
  classes?: {
    showAll?: CheckboxClasses;
  };
  dialog?: SingleDialogProps;
  items: Array<CheckboxProps>;
  name: string;
  linkable?: boolean;
  onClick?: Function;
  onCloseDialog?: Function;
  onShowDialog?: Function;
  selected?: number;
  showAll?: boolean;
}

export const defaultProps = {
  dialog: {
    show: false,
  },
  classes: {
    showAll: {

    },
  },
  linkable: false,
};
