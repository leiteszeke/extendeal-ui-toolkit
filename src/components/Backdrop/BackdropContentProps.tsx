export interface BackdropContentProps {
  body: HTMLElement | React.ReactNode;
  buttons?: Array<FooterButton>;
  classes?: {
    content?: string;
    footer?: string;
  };
  footerType?: string;
}

export interface FooterButton {
  classes?: string;
  label: string;
  noMargin?: string;
  onClick?: Function;
}

export const defaultProps = {
  classes: {
    content: '',
    footer: '',
  },
};
