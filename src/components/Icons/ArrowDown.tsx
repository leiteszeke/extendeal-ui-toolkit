// Dependencies
import * as React from 'react';
// Styled
import { SvgElement } from './IconStyle';
// Props
import { IconProps, defaultProps } from './IconProps';

const ArrowDown = (props:IconProps) => {
  const componentProps = { ...defaultProps, ...props };
  const {
    backgroundColor,
    fillColor,
    height,
    onClick,
    style,
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
      style={ style }
      viewBox="0 0 32 32"
      width={ width }
    >
      <path
        d="
          M3.8,6.1L16,18.4
          L28.2,6.1L32,9.9
          l-16,16L0,9.9L3.8,6.1z
        "
      />
    </SvgElement>
  );
};

export { ArrowDown };
