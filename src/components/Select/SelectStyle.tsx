// Dependencies
import styledComponents from 'styled-components';
// Components
import { Gray } from '../Colors/Acromathic/Gray';
import { Shadow } from '../Shadow/Shadow';

export const Wrapper = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
}))`

`;

export const Input = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
  onClick: props.onClick,
}))`
  border: none;
  border-bottom: 1px solid ${Gray.S400};
  box-sizing: border-box;
  cursor: pointer;
  height: 52px;
  padding-bottom: 8px;
`;

export const Options = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
}))`
  box-shadow: ${Shadow.level1};
  padding: 12px 0;
`;

export const Option = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
  onClick: props.onClick,
}))`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 32px;
  padding: 0 16px;

  &.selected,
  &:hover {
    background: ${Gray.S400};
  }

  &.option-selected {
    background: none;
    color: ${Gray.S800};
    line-height: 14px;
    height: 14px;
    position: relative;
    top: 16px;
  }
`;

export const OptionLabel = styledComponents<any>('label').attrs(props => ({
  className: props.classes,
}))`
  color: ${Gray.S800};
  font-family: 'Source Sans Pro';
  font-size: 14px;
  font-weight: 400;

  &:hover {
    cursor: pointer;
  }
`;

export const Label = styledComponents<any>('p').attrs(props => ({
  className: props.classes,
}))`
  color: ${Gray.S500};
  font-size: 14px;
  font-weight: 400;
  height: 14px;
  line-height: 14px;
  margin: 0;
  pointer-events: none;
  position: relative;
  padding: 0 16px;
  top: 28px;
  transition: 0.2s ease all;

  &.option-selected {
    font-size: 12px;
    line-height: 12px;
    top: 8px;
  }
`;
