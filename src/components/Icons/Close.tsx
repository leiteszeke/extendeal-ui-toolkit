// Dependencies
import * as React from 'react';
// Styled
import { SvgElement } from './IconStyle';
// Props
import { IconProps, defaultProps } from './IconProps';
// Components
import { White } from '../Colors/Acromathic/White';

const Close = (props: IconProps) => {
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
      viewBox="0 0 24 24"
      width={width}
    >
      <path
        d="
          M19 6.41
          L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5
          17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z
        "
        fill={fillColor}
      />
      <path
        d="M0 0h24v24H0z"
        fill={backgroundColor === White.level4 ? 'none' : backgroundColor}
      />
    </SvgElement>
  );
};

export { Close };
