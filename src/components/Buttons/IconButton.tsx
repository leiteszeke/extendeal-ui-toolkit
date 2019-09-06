// Dependencies
import * as React from 'react';
// Components
import { Button } from './Button';
// Props
import { IconButtonProps, defaultProps } from './IconButtonProps';

const IconButton = (props: IconButtonProps) => {
  const componentProps = { ...defaultProps, ...props };
  const {
    backgroundColor,
    classes,
    icon,
    label,
  } = componentProps;

  return (
    <Button
      classes={ classes }
      color={ backgroundColor }
      label={ label }
      variant="icon"
    >
      { icon }
    </Button>
  );
};

export { IconButton };
