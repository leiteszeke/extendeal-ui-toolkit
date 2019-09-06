// Props
import { RadioProps } from './RadioProps';

export interface RadioGroupProps {
  classes?: {
    wrapper?: string;
  };
  items: Array<RadioProps>;
  name: string;
  onClick?: Function;
}

export const defaultProps = {
  classes: {
    wrapper: '',
  },
  items: [],
  name: `Radio_${new Date().getMilliseconds()}`,
};
