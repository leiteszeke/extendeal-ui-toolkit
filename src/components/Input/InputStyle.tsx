// Dependencies
import styledComponents from 'styled-components';
// Components
import { Gray } from '../Colors/Acromathic/Gray';
import { Mario } from '../Colors/Primary/Mario';
import { Milhouse } from '../Colors/Primary/Milhouse';
import { Shadow } from '../Shadow/Shadow';

// Default Style
export const defaultStyle = {
  borderDisabled: Gray.S500,
  boxShadow: Shadow.level1,
  boxShadowDisabled: 'transparent',
  disabledColor: Gray.S500,
  disabledColorBackground: Gray.S400,
  inputActiveColor: Milhouse.Mi400,
  inputAlignText: 'right',
  inputBorderColor: Gray.S500,
  inputErrorColor: Mario.Ma400,
  inputFocusColor: Milhouse.Mi400,
  inputFontColor: Gray.S800,
  inputFontSize: '14px',
  inputWidth: '100%',
  readOnlyColor: 'transparent',
};

// Styled Components
export const InputElement = styledComponents<any>('input').attrs(props => ({
  className: props.classes,
  dataDefault: props.dataDefault,
  defaultValue: props.defaultValue,
  onChange: props.onChange,
  onInput: props.onInput,
  value: props.value,
}))`
  font-size: ${props => props.inputStyle.inputFontSize};
  height: 28px;
  width: ${props => props.inputStyle.inputWidth};
  border: 1px solid ${props => props.inputStyle.inputBorderColor};
  border-radius: 4px;
  color: ${props => props.inputStyle.inputFontColor};
  text-align: ${props => props.inputStyle.inputAlignText};
  outline: none;
  padding: 0 4px 0;
  font-family: 'Source Sans Pro';
  font-style: normal;
  overflow: auto;

  &.elevated {
    box-shadow: ${props => props.inputStyle.boxShadow};
  }

  &:active {
    border: 1px solid ${props => props.inputStyle.inputActiveColor};
  }

  &:focus {
    border: 1px solid ${props => props.inputStyle.inputFocusColor};
  }

  &[error],
  &.error{
    border-color: ${props => props.inputStyle.inputErrorColor};
  }

  &[disabled],
  &.disabled {
    color: ${props => props.inputStyle.disabledColor};
    border-color:${props => props.inputStyle.borderDisabled};
    background: ${props => props.inputStyle.disabledColorBackground};
    box-shadow: 1px 2px 6px ${props => props.inputStyle.boxShadowDisabled};
    pointer-events: none;

    &::placeholder {
      color: ${props => props.inputStyle.disabledColor};
    }
  }

  &[readOnly],
  &.readOnly {
    border-color:${props => props.inputStyle.readOnlyColor};
    box-shadow: 1px 2px 6px ${props => props.inputStyle.readOnlyColor};
    pointer-events: none;
  }
`;
