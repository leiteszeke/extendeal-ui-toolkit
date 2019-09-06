export interface CheckboxProps {
  classes?: CheckboxClasses;
  checked: boolean;
  disabled?: boolean;
  label: string;
  linkable?: boolean;
  linked?: boolean;
  name: string;
  onClick?: Function;
  value?: string | number;
}

export interface CheckboxClasses {
  check?: string;
  content?: string;
  icon?: string;
  label?: string;
  wrapper?: string;
}

export const defaultProps = {
  classes: {
    check: '',
    content: '',
    icon: '',
    label: '',
    wrapper: '',
  },
  checked: false,
  disabled: false,
  label: 'Checkbox',
  name: `Checkbox_${new Date().getMilliseconds()}`,
};
