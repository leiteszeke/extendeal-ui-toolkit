// Dependencies
import * as React from 'react';
// Styled
import { SvgElement } from './IconStyle';
// Props
import { IconProps, defaultProps } from './IconProps';

const ArrowUp = (props: IconProps) => {
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
      height={height}
      onClick={handleClick}
      preserveAspectRatio="none"
      style={style}
      viewBox="0 0 32 32"
      width={width}
    >
      <path
        d="
          M28.2,25.9L16,13.6
          L3.8,25.9L0,22.1
          l16-16l16,16L28.2,25.9z
        "
      />
    </SvgElement>
  );
};

export { ArrowUp };
