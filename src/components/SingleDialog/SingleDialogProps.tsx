// Props
import { PrimaryColorProps } from '../Colors/Primary/PrimaryColorProps';
import AcromathicColorProps from '../Colors/Acromathic/AcromathicColorProps';
import InstitutionalColorProps from '../Colors/Institutional/InstitutionalColorProps';

export interface SingleDialogProps {
  cancelText?: string;
  classes?: SingleDialogClasses;
  confirmText?: string;
  footerButtons: Array<SingleDialogFooterButtonProps>;
  portal?: HTMLElement;
  text: string;
  title: string;
  show: boolean;
}

export interface SingleDialogClasses {
  overlay?: string;
  wrapper?: string;
}

export interface SingleDialogFooterButtonProps {
  color?: AcromathicColorProps | PrimaryColorProps | InstitutionalColorProps;
  label: string;
  onClick?: Function;
}

export const defaultProps = {
  classes: {
    overlay: '',
    wrapper: '',
  },
  portal: document.body,
};
