// Components
import { Back } from '../Icons/Back';
import { Colors } from '../Colors/Colors';
// Props
import { PrimaryColorProps } from '../Colors/Primary/PrimaryColorProps';

export interface IconButtonProps {
  backgroundColor?: PrimaryColorProps;
  classes?: {
    wrapper?: string;
  };
  icon: React.ReactNode;
  label?: string;
}

export const defaultProps = {
  backgroundColor: Colors.Milhouse,
  classes: {
    wrapper: '',
  },
};
