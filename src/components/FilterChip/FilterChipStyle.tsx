// Dependencies
import styledComponents from 'styled-components';
// Components
import { Gray } from './../Colors/Acromathic/Gray';

export const Wrapper = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
}))`
  backgroun Gray.S300 };
  border-radius: 16px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: nowrap;
  height: 32px;
  padding: 7px 12px;
  margin: 0 10px;
`;

export const Label = styledComponents<any>('p').attrs(props => ({
  className: props.classes,
}))`
  color: ${ Gray.S800 };
  font-family: 'Source Sans Pro';
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`;

export const Icon = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
}))`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 16px;
  justify-content: center;
  margin-left: 12px;
  padding: 1px 0;
  width: 16px;
`;
