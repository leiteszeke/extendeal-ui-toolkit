// Props
import { BackdropContentProps } from './BackdropContentProps';
import { SingleDialogProps } from '../SingleDialog/SingleDialogProps';

export interface BackdropProps {
  classes?: {
    content?: string;
    footer?: string;
    header?: string;
    overlay?: string;
    wrapper?: string;
  };
  closable?: boolean;
  closeIntent?: boolean;
  content?: BackdropContentProps;
  dialog?: SingleDialogProps;
  headless?: boolean;
  onClose?: Function;
  onCloseDialog?: Function;
  onOpen?: Function;
  onShowDialog?: Function;
  opened?: boolean;
  title?: string;
  portal?: HTMLElement;
}

export const defaultProps = {
  classes: {
    content: '',
    footer: '',
    header: '',
    overlay: '',
    wrapper: '',
  },
  closable: true,
  closeIntent: false,
  content: {
    body: '<div />',
  } as BackdropContentProps,
  opened: false,
  title: 'Titulo',
  portal: document.body,
};
