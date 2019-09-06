// Dependencies
import * as React from 'react';
// Styled
import { SvgElement } from './IconStyle';
// Props
import { IconProps, defaultProps } from './IconProps';

const CircleClose = (props:IconProps) => {
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
      <defs>
        <clipPath id="clip-Close-full">
          <rect width={ width } height={ height }/>
        </clipPath>
      </defs>
      <g id="Close-full" clipPath="url(#clip-Close-full)">
        <circle cx="12" cy="12" r="12" fill={ fillColor } />
        <path
          d="M10,1,6,5l4,4L9,10,5,6,1,10,0,9,4,5,0,1,1,0,5,4,9,0Z"
          fill={ backgroundColor }
          transform="translate(7 7)"
        />
      </g>
    </SvgElement>
  );
};

export { CircleClose };
