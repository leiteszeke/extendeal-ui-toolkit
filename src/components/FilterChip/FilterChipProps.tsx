export interface FilterChipProps {
  classes?: {
    icon?: string;
    label?: string;
    wrapper?: string;
  };
  label: string;
  onClick?: Function;
  removable?: boolean;
}

export const defaultProps = {
  classes: {
    icon: '',
    label: '',
    wrapper: '',
  },
  removable: true,
};
