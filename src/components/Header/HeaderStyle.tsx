// Dependencies
import styledComponents from 'styled-components';
// Components
import { Milhouse } from '../Colors/Primary/Milhouse';
import { Shadow } from '../Shadow/Shadow';
import { White } from '../Colors/Acromathic/White';

export const HeaderWrapper = styledComponents<any>('header').attrs(props => ({
  className: props.classes,
}))`
  align-items: center;
  background: ${props => props.backgroundColor};
  box-shadow: ${Shadow.level1};
  box-sizing: border-box;
  display: flex;
  height: 48px;
  justify-content: space-between;
  padding: 0 16px;
  position: relative;
  width: 100%;
  z-index: 9000;

  @media (max-width: 1024px) {
    height: 56px;
    padding: 0;
  }
`;

export const LeftNavbar = styledComponents<any>('nav').attrs(props => ({
  className: props.classes,
}))`
  display: flex;
  float: left;

  @media (max-width: 1024px) {
    justify-content: flex-start;
    width: calc(100% / 3);
  }
`;

export const Breadcrumb = styledComponents<any>('p').attrs(props => ({
  className: props.classes,
}))`
  align-items: center;
  color: ${White.level4};
  display: flex;
  font-size: 16px;
  justify-content: center;
  width: calc(100% / 3);

  @media (max-width: 640px) {
    display: block;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: calc(100% - 88px);
    word-break: break-word;
  }
`;

export const Link = styledComponents<any>('a').attrs(props => ({
  className: props.classes,
  onClick: props.onClick,
}))`
  align-items: center;
  display: flex;
  margin-right: 0;
  text-decoration: none;

  @media (max-width: 1024px) {
    height: 56px;
    width: calc(100% / 3);
  }
`;

export const RightNavbar = styledComponents<any>('nav').attrs(props => ({
  className: props.classes,
}))`
  display: flex;
  float: left;

  @media (max-width: 1024px) {
    justify-content: flex-end;
    margin-left: auto;
    width: calc(100% / 3);
  }
`;

export const Separator = styledComponents<any>('hr').attrs(props => ({
  className: props.classes,
}))`
  border: 0;
  border-top: 1px solid ${Milhouse.level4};
  height: 1px;
  margin: 8px 0;
  padding: 0;
  width: 100%;
`;

export const Image = styledComponents<any>('img').attrs(props => ({
  className: props.classes,
  src: props.source,
}))`
  width: 100%;
`;

export const IconWrapper = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
}))`
  display: flex;
  justify-content: center;
  width: 44px;
`;
