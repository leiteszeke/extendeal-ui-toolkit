// Dependencies
import styledComponents from 'styled-components';

export const Container = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
}))`
  height: 100%;
  position: relative;
`;

export const Content = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
}))`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const HideableDiv = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
}))`
  &.carousel__body {
    height: calc(100% - 52px);
  }
`;

export const Footer = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
}))`
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;
