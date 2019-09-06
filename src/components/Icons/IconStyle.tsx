// Dependencies
import styledComponents from 'styled-components';

export const SvgElement = styledComponents<any>('svg').attrs(props => ({
  height: props.height,
  onClick: props.onClick,
  preserveAspectRatio: props.preserveAspectRatio,
  style: props.style,
  viewBox: props.viewBox,
  width: props.width,
}))`
  align-items: center;
  background: transparent;
  border: none;
  display: flex;
  justify-content: center;
  outline: none;
  padding: 0;
`;
