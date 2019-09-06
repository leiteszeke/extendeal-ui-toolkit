export interface SpinnerProps {
  classes?: string;
  horizontal?: boolean;
  loading: boolean;
  style?: object;
  relative?: boolean;
  title?: string;
}

export const defaultProps = {
  classes: '',
  horizontal: false,
  loading: false,
  relative: false,
  title: 'Cargando',
};
