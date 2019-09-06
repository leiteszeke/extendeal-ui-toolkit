// Dependencies
import styledComponents from 'styled-components';
// Components
import { Colors } from '../Colors/Colors';
// Helpers
import { utils } from '@extendeal/ext-commons';

export const Overlay = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
}))`
  display: none;

  &.opened {
    background: ${utils.colorWithOpacity(Colors.Black.level4, 0.2)};
    display: flex;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 9999;
  }
`;

export const BackdropWrapper = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
}))`
  background: ${Colors.White.level4};
  bottom: 0;
  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.8);
  position: absolute;
  transition: 0.5s;
  width: 100%;
  z-index: 10000;

  @media (min-width: 1024px) {
    border-radius: 16px 0 0 16px;
    height: 648px;
    right: 0;
    width: 648px;
  }

  @media (max-width: 1023px) {
    border-radius: 16px 16px 0 0;
    height: calc(100% - 56px);
    left: 0;
  }

  &.closed {
    padding: 0;
    transition: 0.5s;

    @media (min-width: 1024px) {
      border-radius: 16px 0 0 16px;
      width: 32px;

      &.headless {
        width: 0;
      }
    }

    @media (min-width: 731px) and (max-width: 1023px) {
      height: 48px;

      &.headless {
        height: 0;
      }
    }

    @media (max-width: 730px) {
      height: 32px;

      &.headless {
        height: 0;
      }
    }

  }
`;

export const BackdropHeader = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
}))`
  box-sizing: border-box;
  color: ${Colors.Gray.level7};
  display: flex;
  justify-content: space-between;
  padding: 24px 16px;

  ${BackdropWrapper}.closed & {
    align-items: center;
    justify-content: center;
    padding: 0;

    @media (min-width: 1024px) {
      height: 100%;
    }

    @media (min-width: 731px) and (max-width: 1023px) {
      height: 48px;
    }

    @media (max-width: 730px) {
      height: 32px;
    }
  }
`;

export const Title = styledComponents<any>('span').attrs(props => ({
  className: props.classes,
}))`
  display: block;
  font-size: 20px;
  font-weight 600;
  line-height: 24px;
  margin-right: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: calc(100% - 24px);
  word-break: break-word;

  ${BackdropWrapper}.closed & {
    display: none;
  }
`;

export const BackdropContent = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
}))`
  box-sizing: border-box;
  height: calc(100% - 72px);
  padding: 0 16px 16px 16px;
  width: 100%;

  ${BackdropWrapper}.closed & {
    display: none;
  }
`;

export const BackdropFooter = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
}))`
  box-sizing: border-box;
  height: 60px;
  width: 100%;

  ${BackdropWrapper}.closed & {
    display: none;
  }

  &.with-buttons {
    display: flex;
    justify-content: space-between;
    padding: 8px 16px 16px 16px;
  }
`;
