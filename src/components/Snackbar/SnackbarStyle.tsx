// Dependencies
import styledComponents from 'styled-components';
// Components
import { Mario } from '../Colors/Primary/Mario';
import { Garfield } from '../Colors/Institutional/Garfield';
import { Gray } from '../Colors/Acromathic/Gray';
import { White } from '../Colors/Acromathic/White';
import { Shadow } from '../Shadow/Shadow';

export const Wrapper = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
}))`
  align-items: center;
  border-radius: 4px;
  box-shadow: ${ Shadow.level2 };
  color: ${ Gray.S800 };
  display: flex;
  flex-wrap: nowrap;
  height: 60px;
  padding: 0 16px;
  width: 504px;

  @media (max-width: 640px) {
    width: 100%;
  }

  &.error {
    background: ${ Mario.Ma400 };
    color: ${ White.level4 };
  }

  &.warning {
    background: ${ Garfield.G600 };
    color: ${ White.level4 };
  }
`;

export const TextContainer = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
}))`
  display: flex;
  flex: 1;
`;

export const Text = styledComponents<any>('p').attrs(props => ({
  className: props.classes,
}))`
  font-family 'Source Sans Pro';
  font-size: 16px;
`;

export const SemiBoldText = styledComponents<any>('span').attrs(props => ({
  className: props.classes,
}))`
  font-weight: 600;
`;

export const ActionButton = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
}))`

`;
