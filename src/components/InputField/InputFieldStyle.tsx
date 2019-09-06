// Dependencies
import classnames from 'classnames';
import styledComponents from 'styled-components';
// Components
import { Gray } from '../Colors/Acromathic/Gray';

export const GroupDiv = styledComponents<any>('div').attrs(props => ({
  className: classnames('group', props.classes),
}))`
  position: relative;
  margin-top: 45px;
`;

export const StyledInput = styledComponents<any>('input').attrs(props => ({
  className: props.classes,
  color: props.color,
  width: props.width,
}))`
  font-size: 14px;
  padding: 8px 0;
  display: block;
  width: ${ props => `${ props.width }px` };
  border: none;
  border-bottom: 1px solid ${ Gray.S400 };
  color: ${ Gray.S800 };

  &:focus {
    outline: none;
  }

  &:focus ~ label, &:valid ~ label {
    top: -20px;
    font-size: 12px;
    color: ${ Gray.S500 };
  }

  &:focus ~ .bar:before, &:focus ~ .bar:after {
    width: 50%;
  }
`;

export const Bar = styledComponents<any>('span').attrs(props => ({
  className: props.classes,
  color: props.color,
  width: props.width,
}))`
  position: relative;
  display: block;
  width: ${ props => `${ props.width }px` };

  &:before, &:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: ${ props => props.color.level4 };
    transition: 0.2s ease all;
  }

  &:before {
    left: 50%;
  }

  &:after {
    right: 50%;
  }
`;

export const StyledLabel = styledComponents<any>('label').attrs(props => ({
  className: props.classes,
}))`
  color: ${ Gray.S500 };
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  top: 10px;
  transition: 0.2s ease all;
`;

export const HelperText = styledComponents<any>('span').attrs(props => ({
  className: classnames('helperText', props.classes),
}))`
  font-size: 12px;
  color: ${ Gray.S500 };
`;
