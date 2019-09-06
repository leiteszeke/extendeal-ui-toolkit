// Dependencies
import styledComponents from 'styled-components';
// Components
import { Shadow } from '../Shadow/Shadow';
import { Garfield } from '../Colors/Institutional/Garfield';
import { Gray } from '../Colors/Acromathic/Gray';
// Helpers
import { utils } from '@extendeal/ext-commons';

export const Wrapper = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
}))`
  border-radius: 4px;
  box-shadow: ${ Shadow.level1 };
  box-sizing: border-box;
  display: flex;
  flex-wrap: nowrap;
  height: auto;
  height: 132px;
  width: 304px;
`;

export const Body = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
}))`
  border-radius: 4px 0 0 4px;
  box-sizing: border-box;
  padding: 16px;
  width: 216px;
`;

export const Name = styledComponents<any>('p').attrs(props => ({
  className: props.classes,
}))`
  color: ${ Gray.S900 };
  font-family: 'Source Sans Pro';
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 8px;
`;

export const Role = styledComponents<any>('p').attrs(props => ({
  className: props.classes,
}))`
  color: ${ Gray.S700 };
  font-family: 'Source Sans Pro';
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  margin-bottom: 16px;
`;

export const Email = styledComponents<any>('p').attrs(props => ({
  className: props.classes,
}))`
  color: ${ Gray.S800 };
  font-family: 'Source Sans Pro';
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-word;
  width: 100%;
`;

export const Phone = styledComponents<any>('p').attrs(props => ({
  className: props.classes,
}))`
  color: ${ Gray.S800 };
  font-family: 'Source Sans Pro';
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
`;

export const Thumbnail = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
}))`
  align-items: center;
  background-color: ${ utils.colorWithOpacity(Garfield.G900, 0.4) };
  border-radius: 0 4px 4px 0;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 88px;
`;

export const Image = styledComponents<any>('image').attrs(props => ({
  className: props.classes,
  src: props.source,
}))`
  height: 40px;
  width: 40px;
`;
