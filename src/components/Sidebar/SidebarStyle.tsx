// Dependencies
import styledComponents from 'styled-components';
// Components
import { Shadow } from '../Shadow/Shadow';

export const Wrapper = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
}))`
  background: ${props => props.backgroundColor};
  box-shadow: ${Shadow.level1};
  display: flex;
  flex-direction: column;
  height: calc(100% - 48px);
  justify-content: space-between;
  left: 0;
  position: absolute;
  width: 56px;
  z-index: 9000;

  @media (max-width: 1040px) {
    height: 56px;
    width: 100%;
  }
`;

export const TopNavbar = styledComponents<any>('nav').attrs(props => ({
  className: props.classes,
}))`
  overflow: hidden;
  overflow-y: auto;

  @media (max-width: 1040px) {
    height: 100%;
    width: 100%;
  }
`;

export const Link = styledComponents<any>('a').attrs(props => ({
  className: props.classes,
  onClick: props.onClick,
}))`
  align-items: center;
  display: flex;
  height: 72px;
  justify-content: center;
  margin: 0;
  padding: 0;
  position: relative;
  text-align: center;
  text-decoration: none;
  width: 100%;
`;

export const SidebarMenu = styledComponents<any>('ul').attrs(props => ({
  className: props.classes,
}))`
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0
`;

export const BottomNavbar = styledComponents<any>('nav').attrs(props => ({
  className: props.classes,
}))`
  margin-top: auto;
  overflow: visible;

  @media (max-width: 1040px) {
    display: none;
  }
`;
