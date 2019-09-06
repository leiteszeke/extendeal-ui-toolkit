export interface MobileSearchProps {
  classes?: {
    leftIcon?: string;
    iconWrapper?: string;
    input?: string;
    overlay?: string;
    rightIcon?: string;
    wrapper?: string;
  };
  inputValue?: string;
  onChange?: Function;
  onClose?: Function;
  onDelete?: Function;
  onOpen?: Function;
  opened: boolean;
  placeHolder?: string;
}

export const defaultProps = {
  classes: {
    leftIcon: '',
    iconWrapper: '',
    input: '',
    overlay: '',
    rightIcon: '',
    wrapper: '',
  },
  opened: false,
};
