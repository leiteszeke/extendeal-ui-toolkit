export interface SnackbarProps {
  classes?: {
    action?: string;
    text?: string;
    wrapper?: string;
  };
  show: boolean;
  text: React.ReactNode | string;
  textButton?: string;
  type: string;
}

export const defaultProps = {
  classes: {
    action: '',
    text: '',
    wrapper: '',
  },
  show: false,
  textButton: 'Ver',
};
