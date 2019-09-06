// Dependencies
import * as React from 'react';
// Styled
import { SvgElement } from './IconStyle';
// Props
import { IconProps, defaultProps } from './IconProps';

const MoreVert = (props:IconProps) => {
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
      <path fill={ backgroundColor } d="M0 0h24v24H0z" />
      <path
        fill={ fillColor }
        d="
          M12 8
          c1.1 0 2-.9 2-2
          s-.9-2-2-2-2 .9-2 2 .9 2 2 2
          zm0 2c-1.1 0-2 .9-2 2
          s.9 2 2 2 2-.9 2-2-.9-2-2-2
          zm0 6
          c-1.1 0-2 .9-2 2
          s.9 2 2 2 2-.9 2-2-.9-2-2-2z
        "
      />
    </SvgElement>
  );
};

export { MoreVert };
