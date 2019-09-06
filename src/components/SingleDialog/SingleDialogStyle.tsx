// Dependencies
import styledComponents from 'styled-components';
import { utils } from '@extendeal/ext-commons';
// Components
import { Black } from '../Colors/Acromathic/Black';
import { Gray } from '../Colors/Acromathic/Gray';
import { Shadow } from '../Shadow/Shadow';
import { White } from '../Colors/Acromathic/White';

export const Overlay = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
}))`
  background: ${ utils.colorWithOpacity(Black.level4, 0.2) };
  height: 100%;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 12000;
`;

export const Wrapper = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
}))`
  background: ${ White.level4 };
  border-radius: 4px;
  box-shadow: ${ Shadow.level1 };
  left: 50%;
  min-height: 196px;
  max-height: 316px;
  position: absolute;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 280px;
`;

export const Header = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
}))`
  padding: 24px 24px 20px 24px;
`;

export const Title = styledComponents<any>('h2').attrs(props => ({
  className: props.classes,
}))`
  color: ${ Gray.S900 };
  font-family: 'Source Sans Pro';
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
`;

export const Body = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
}))`
  padding: 0 24px 24px 24px;
`;

export const Text = styledComponents<any>('p').attrs(props => ({
  className: props.classes,
}))`
  color: ${ Gray.S800 };
  font-family: 'Source Sans Pro';
  font-size: 16px;
  line-height: 18px;
`;

export const Footer = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
}))`
  display: flex;
  justify-content: flex-end;
  padding: 8px 8px 8px 24px;
`;
