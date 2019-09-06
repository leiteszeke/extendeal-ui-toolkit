// Dependencies
import * as React from 'react';
// Styled
import { SvgElement } from './IconStyle';
// Props
import { IconProps, defaultProps } from './IconProps';
import { White } from '../Colors/Acromathic/White';

const Search = (props:IconProps) => {
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
      <path
        d="
          M15.5 14h-.79l-.28-.27
          C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3
          S3 5.91 3 9.5 5.91 16 9.5 16
          c1.61 0 3.09-.59 4.23-1.57
          l.27.28v.79l5 4.99L20.49 19
          l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5
          S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z
        "
        fill={ fillColor }
      />
      <path
        d="M0 0h24v24H0z"
        fill={ backgroundColor === White.level4 ? 'none' : backgroundColor }
      />
    </SvgElement>
  );
};

export { Search };
