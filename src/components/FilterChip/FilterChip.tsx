// Dependencies
import * as React from 'react';
// Styled
import { Wrapper, Label, Icon } from './FilterChipStyle';
// Props
import { FilterChipProps, defaultProps } from './FilterChipProps';
// Components
import { Close } from '../Icons/Close';
import { Colors } from '../Colors/Colors';

const FilterChip = (props:FilterChipProps) => {
  const componentProps = { ...defaultProps, ...props };
  const {
    classes,
    label,
    onClick,
    removable,
  } = componentProps;

  const handleClick = () => {
    if (typeof onClick === 'function') {
      onClick();
    }
  };

  return (
    <Wrapper classes={ classes.wrapper }>
      <Label classes={ classes.label }>{ label }</Label>
      { removable === true &&
        <Icon classes={ classes.icon }>
          <Close
            backgroundColor="transparent"
            fillColor={ Colors.Gray.S800 }
            height={ 16 }
            onClick={ handleClick }
            width={ 16 }
          />
        </Icon>
      }
    </Wrapper>
  );
};

export { FilterChip };
