// Dependencies
import * as React from 'react';
// Props
import { DropdownItemProps, defaultProps } from './DropdownItemProps';
// Styled
import { Item, Separator } from './DropdownItemStyle';

const DropdownItem = (props:DropdownItemProps) => {
  const componentProps = { ...defaultProps, ...props };
  const {
    children,
    classes,
    color,
    onClick,
    separator,
  } = componentProps;

  const handleOnClick:Function = ():void => {
    if (typeof onClick === 'function') {
      onClick();
    }
  };

  if (typeof separator !== 'undefined') {
    return (
      <Item color={ color }>
        <Separator classses={ classes.separator } />
      </Item>
    );
  }

  return (
    <Item
      classes={ classes.item }
      color={ color }
      onClick={ handleOnClick }
    >
      { children }
    </Item>
  );
};

export { DropdownItem };
