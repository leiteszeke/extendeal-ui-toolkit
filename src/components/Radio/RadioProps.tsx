export interface RadioProps {
  checked: boolean;
  classes?: {
    content?: string;
    icon?: string;
    label?: string;
    wrapper?: string;
  };
  disabled?: boolean;
  label: string;
  name: string;
  onClick?: Function;
  value?: string;
}

export const defaultProps = {
  checked: false,
  classes: {
    content: '',
    icon: '',
    label: '',
    wrapper: '',
  },
  disabled: false,
  label: 'Radio',
  name: `Radio_${new Date().getMilliseconds()}`,
};
