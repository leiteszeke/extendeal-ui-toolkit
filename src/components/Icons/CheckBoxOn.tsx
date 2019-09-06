// Dependencies
import * as React from 'react';
// Styled
import { SvgElement } from './IconStyle';
// Props
import { IconProps, defaultProps } from './IconProps';

const CheckBoxOn = (props:IconProps) => {
  const componentProps = { ...defaultProps, ...props };
  const {
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
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="
          M19 3H5c-1.11 0-2 .9-2 2
          v14c0 1.1.89 2 2 2h14
          c1.11 0 2-.9 2-2V5
          c0-1.1-.89-2-2-2zm-9 14
          l-5-5 1.41-1.41L10 14.17
          l7.59-7.59L19 8l-9 9z
        "
        fill={ fillColor }
      />
    </SvgElement>
  );
};

export { CheckBoxOn };
