// Props
import { PrimaryColorProps } from '../Colors/Primary/PrimaryColorProps';
// Components
import { Milhouse } from '../Colors/Primary/Milhouse';

export interface InputFieldProps {
  classes?: {
    bar?: string;
    div?: string;
    helperText?: string;
    input?: string;
    label?: string;
  };
  id?: string;
  name: string;
  color?: PrimaryColorProps;
  type?: string;
  placeHolder?: string;
  helpText?: string;
  width?: number;
  onChange?: Function;
  value?: string;
}

export const defaultProps = {
  classes: {
    bar: '',
    div: '',
    helperText: '',
    input: '',
    label: '',
  },
  color: Milhouse,
  type: 'text',
  width: 200,
};
