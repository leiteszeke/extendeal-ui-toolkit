// Dependencies
import * as React from 'react';
// Styled
import { SvgElement } from './IconStyle';
// Props
import { IconProps, defaultProps } from './IconProps';

const Back = (props: IconProps) => {
  const componentProps = { ...defaultProps, ...props };
  const { backgroundColor, fillColor, height, onClick, width } = componentProps;

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
      viewBox="0 0 32 32"
      width={width}
    >
      <path fill={backgroundColor} d="M24 0v24H0V0h24z" />
      <path
        fill={fillColor}
        d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
      />
    </SvgElement>
  );
};

export { Back };
