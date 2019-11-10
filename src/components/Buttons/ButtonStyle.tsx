// Dependencies
import styledComponents from 'styled-components';
// Components
import { Black } from '../Colors/Acromathic/Black';
import { Gray } from '../Colors/Acromathic/Gray';
import { White } from '../Colors/Acromathic/White';

const invertWhite = (color: string) =>
  color === White.level4 ? Black.level4 : color;

export const ButtonWrapper = styledComponents<any>('button').attrs(props => ({
  className: props.classes,
  color: props.color,
  disabled: props.disabled,
  onClick: props.onClick,
}))`
  background: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  height: 36px;
  line-height: 34px;
  outline: none;
  padding: 0 16px;
  text-transform: uppercase;
  font-family: 'Source Sans Pro';
  width: auto;

  &.classic {
    border: 1px solid ${props => invertWhite(props.color.level4)};
    background: ${props => invertWhite(props.color.level4)};
    color: ${White.level4};

    &:hover {
      border: 1px solid ${Gray.level3};
      background: ${props => props.color.level3};
    }

    &:active {
      background: ${props => props.color.level5};
      border: 1px solid ${props => props.color.level5};
    }

    &:disabled {
      background: ${Gray.level3};
      border: 1px solid ${Gray.level3};
    }
  }


  &.outline, &.flat {
    background: ${White.level4};
    color: ${props => invertWhite(props.color.level4)};

    &:hover {
      color: ${props => invertWhite(props.color.level4)};
      background: ${props => invertWhite(props.color.level1)};
    }

    &:active {
      background: ${props => props.color.level2};
    }

    &:disabled {
      background: ${White.level4};
      color: ${Gray.level4};
    }
  }

  &.flat {
    background: none;
    color: ${props => props.color.level4};
  }

  &.outline {
    border: 1px solid ${props => invertWhite(props.color.level4)};

    &:hover {
      border: 1px solid ${props => invertWhite(props.color.level4)};
    }

    &:disabled {
      border: 1px solid ${Gray.level4};
    }
  }

  &.invisible {
    display: none;
  }

  ${props =>
    props.noMargin !== 'vertical' &&
    props.noMargin !== 'horizontal' &&
    `
      &.no-margin-${props.noMargin} {
        margin-${props.noMargin}: 0;
        padding-${props.noMargin}: 0;
      }
    `}

  &.no-margin-horizontal {
    margin-left: 0;
    margin-right: 0;
  }

  &.no-margin-vertical {
    margin-bottom: 0;
    margin-top: 0;
  }

  &:disabled {
    color: ${Gray.level4};
    cursor: default;
  }
`;
