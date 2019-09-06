// Dependencies
import * as React from 'react';
// tslint:disable-next-line
import AnimateHeight from 'react-animate-height';
// Props
import { HeightProps } from './HeightProps';

const Height = (props: HeightProps) => {
  const { children, classes, timeout } = props;

  return (
    <AnimateHeight className={classes} duration={timeout || 600} {...props}>
      {children}
    </AnimateHeight>
  );
};

export { Height };
