// Dependencies
import styledComponents from 'styled-components';
// Components
import { Gray } from '../Colors/Acromathic/Gray';

export const Wrapper = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
  onClick: props.onClick,
}))`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 32px;
  user-select: none;
  width: 100%;

  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;

  &.disabled {
    cursor: default;
  }

  @media (max-width: 1023px) {
    height: 40px;
  }
`;

export const Icon = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
}))`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 32px;
  padding: 0 8px 0 0;

  @media (max-width: 1023px) {
    height: 40px;
  }
`;

export const Content = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
}))`
  align-items: center;
  display: flex;
  flex: 1;
`;

export const Label = styledComponents<any>('p').attrs(props => ({
  className: props.classes,
}))`
  color: ${Gray.S800};
  font-family: 'Source Sans Pro';
  font-size: 14px;
  font-weight: 400;

  ${Wrapper}.disabled & {
    color: ${Gray.S500};
  }
`;
