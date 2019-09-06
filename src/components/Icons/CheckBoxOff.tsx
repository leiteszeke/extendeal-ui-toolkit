// Dependencies
import * as React from 'react';
// Styled
import { SvgElement } from './IconStyle';
// Props
import { IconProps, defaultProps } from './IconProps';
import { White } from '../Colors/Acromathic/White';

const CheckBoxOff = (props:IconProps) => {
  const componentProps = { ...defaultProps, ...props };
  const {
    backgroundColor,
    fillColor,
    height,
    onClick,
    width,
  } = componentProps;

  const handleClick = () => {
    if (typeof onClick === 'function') {
      onClick();
    }
  };

  return (
    <SvgElement
      height={ height }
      onClick={ handleClick }
      preserveAspectRatio="none"
      viewBox="0 0 24 24"
      width={ width }
    >
      <path
        d="
          M19 5v14H5V5h14m0-2
          H5c-1.1 0-2 .9-2 2
          v14c0 1.1.9 2 2 2
          h14c1.1 0 2-.9 2-2
          V5c0-1.1-.9-2-2-2z
        "
        fill={ fillColor }
      />
      <path
        d="M0 0h24v24H0z"
        fill={ backgroundColor === White.level4 ? 'none' : backgroundColor }
      />
    </SvgElement>
  );
};

export { CheckBoxOff };
