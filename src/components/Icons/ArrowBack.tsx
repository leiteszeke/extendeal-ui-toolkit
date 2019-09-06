// Dependencies
import * as React from 'react';
// Styled
import { SvgElement } from './IconStyle';
// Props
import { IconProps, defaultProps } from './IconProps';

const ArrowBack = (props:IconProps) => {
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
      <path d="M0 0h24v24H0z" fill="none"/>
      <path
        d="
          M20 11H7.83l5.59-5.59
          L12 4l-8 8 8 8 1.41-1.41
          L7.83 13H20v-2z
        "
        fill={ fillColor }
      />
    </SvgElement>
  );
};

export { ArrowBack };
