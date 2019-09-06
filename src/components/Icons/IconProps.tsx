// Colors
import { Colors } from '../Colors/Colors';

export interface IconProps {
  backgroundColor?: string;
  fillColor?: string;
  height?: number;
  onClick?: Function;
  style?: object;
  type?: string;
  width?: number;
}

export const defaultProps = {
  backgroundColor: Colors.White.level4,
  fillColor: Colors.Black.level4,
  height: 24,
  width: 24,
};
