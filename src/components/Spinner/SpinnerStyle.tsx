// Dependencies
import styledComponents from 'styled-components';
// Components
import { Garfield } from '../Colors/Institutional/Garfield';
import { Gray } from '../Colors/Acromathic/Gray';
import { White } from '../Colors/Acromathic/White';

export const Container = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
  style: props.style,
}))`
  align-items: center;
  background: ${ White.level4 };
  display: flex;
  height: 100%;
  left: 0;
  justify-content: center;
  padding: inherit;
  position: absolute;
  top: 0;
  transition: none !important;
  width: 100%;
  z-index: 10000;

  -webkit-transition: none !important;
  -moz-transition: none !important;
  -o-transition: none !important;
  -ms-transition: none !important;

  .Spinner {
    &__wrapper {
      display: block;
      left: 50%;
      max-height: 100%;
      position: absolute;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    &__spinner-wrapper {
      height: 100%;
      margin: 0 auto;
      max-height: 60px;
      position: relative;
      width: 60px;

      &:before {
        content: "";
        display: block;
        padding-top: 100%;
      }
    }

    &__message {
      color: ${ Gray.S400 };
      display: block;
      font-size: 12px;
      font-weight: 200;
      padding-top: 10px;
      text-align: center;
      white-space: nowrap;
    }

    &__spinner {
      animation: Spinner-spin 1.25s linear infinite;
      bottom: 0;
      height: 100%;
      left: 0;
      margin: auto;
      position: absolute;
      right: 0;
      top: 0;
      transform-origin: center center;
      width: 100%;
    }

    &__arc {
      animation: Spinner-arc-bounce 2.5s ease-in-out infinite;
      stroke: ${ Garfield.G900 };
      stroke-dasharray: 1, 10;
      stroke-dashoffset: 0;
      stroke-linecap: round;
    }

    &__wheel {
      fill: none;
      stroke: ${ Gray.S400 };
      stroke-width: 4px;
    }

    &-loading {

    }

    &-relative {
      position: relative;
    }

    &-horizontal {
      border-bottom: none;
      height: 100%;
      max-height: 100%;

      .Spinner {
        &__wrapper {
          align-items: center;
          display: flex;
          height: 32px;
          max-height: 100%;
        }

        &__spinner-wrapper {
          height: 100%;
          max-height: 32px;
          max-width: 32px;
          width: 32px;
        }

        &__message {
          display: flex;
          font-size: 11px;
          padding: 0;
          padding-left: 10px;
        }
      }
    }
  }

  @keyframes Spinner-spin {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes Spinner-arc-bounce {
    0% {
      stroke-dasharray: 1, 400;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 120, 400;
      stroke-dashoffset: -10px;
    }

    100% {
      stroke-dasharray: 120, 400;
      stroke-dashoffset: -124px;
    }
  }
`;
