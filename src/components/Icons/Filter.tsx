// Dependencies
import * as React from 'react';
// Styled
import { SvgElement } from './IconStyle';
// Props
import { IconProps, defaultProps } from './IconProps';

const Filter = (props:IconProps) => {
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
        <clipPath id="clip-filter">
          <rect width={ width } height={ height } />
        </clipPath>
      </defs>

      <g id="filter" style={{ clipPath: "url('#clip-filter')" }}>
        <rect
          style={{ fill: backgroundColor }}
          width={ height }
          height={ width }
        />
        <path
          style={{ fill: fillColor }}
          d="M8.167,14h4.667V11.667H8.167ZM0,0V2.333H21V0ZM3.5,8.167h14V5.833H3.5Z"
          transform="translate(1.5 5)"
        />
      </g>
    </SvgElement>
  );
};

export { Filter };
