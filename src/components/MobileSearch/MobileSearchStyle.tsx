// Dependencies
import styledComponents from 'styled-components';
// Components
import { White } from '../Colors/Acromathic/White';
import { Gray } from '../Colors/Acromathic/Gray';
// Helpers
import { utils } from '@extendeal/ext-commons';

export const Wrapper = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
}))`
  background: ${ White.level4 };
  display: none;
  flex-wrap: nowrap;
  height: 56px;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 11000;

  &.opened {
    display: flex;
  }
`;

export const Overlay = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
}))`
  background: ${ utils.colorWithOpacity(Gray.S800, 0.3) };
  display: none;
  height: calc(100% - 56px);
  position: fixed;
  top: 56px;
  width: 100%;
  z-index: 11000;

  &.opened {
    display: flex;
  }
`;

export const IconWrapper = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
}))`
  display: flex;
  justify-content: center;
  width: 44px;
`;

export const LeftIcon = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
}))`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 44px;
`;

export const Input = styledComponents<any>('input').attrs(props => ({
  className: props.classes,
  onChange: props.onChange,
  placeholder: props.placeHolder,
  value: props.inputValue,
}))`
  animation: slide-left 0.2s ease;
  border: none;
  color: ${ Gray.S800 };
  display: flex;
  flex: 1;
  font-family: 'Source Sans Pro';
  font-size: 14px;
  outline: none;

  &::placeholder {
    color: ${ Gray.S500 };
  }
`;

export const RightIcon = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
}))`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 44px;
`;
