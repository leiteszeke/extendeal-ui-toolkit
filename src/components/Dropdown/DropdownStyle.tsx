// Dependencies
import classnames from 'classnames';
import styledComponents from 'styled-components';
// Components
import { Shadow } from '../Shadow/Shadow';

export const Wrapper = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
  id: props.identifier,
}))`
  color: ${ props => props.color.level1 };
  position: relative;
`;

export const Button = styledComponents<any>('button').attrs(props => ({
  className: classnames(
    {
      active: props.active === true,
    },
    props.classes,
  ),
  identifier: `Button_${ props.identifier }`,
}))`
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  height: 26px;
  min-width: 32px;
  outline: none;
  position: relative;
  transition: background 0.5s ease;

  &.active {
    background: ${ props => props.color.level1 };
  }

  > i {
    font-size: 22px;
  }
`;

export const ButtonText = styledComponents<any>('span').attrs(props => ({
  className: props.classes,
}))`

`;

export const DropdownMenu = styledComponents<any>('ul').attrs(props => ({
  className: classnames(
    {
      right: props.right,
      top: props.top,
    },
    props.classes,
  ),
}))`
  background: white;
  border-radius: 4px;
  box-shadow: ${ Shadow.level1 };
  display: block;
  font-size: 12px;
  font-weight: 400;
  left: 0;
  list-style: none;
  margin: 0;
  min-width: 88px;
  overflow: hidden;
  padding: 8px 0;
  position: absolute;
  top: 100%;
  width: auto;
  z-index: 9000;

  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0

  &.right {
    right: 0;
    left: unset;
  }

  &.top {
    bottom: 0;
    top: unset;
  }
`;
