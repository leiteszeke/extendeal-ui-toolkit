// Dependencies
import * as React from 'react';
// Styled
import { SvgElement } from './IconStyle';
// Props
import { IconProps, defaultProps } from './IconProps';

const RadioOn = (props: IconProps) => {
  const componentProps = { ...defaultProps, ...props };
  const { fillColor, height, onClick, width } = componentProps;

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
          M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5
          zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10
          S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8
          s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z
        "
        fill={fillColor}
      />
      <path d="M0 0h24v24H0z" fill="none" />
    </SvgElement>
  );
};

export { RadioOn };
