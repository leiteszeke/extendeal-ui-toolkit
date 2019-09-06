// Dependencies
import * as React from 'react';
// Props
import { RadioGroupProps, defaultProps } from './RadioGroupProps';
// Styled
import { Wrapper } from './RadioGroupStyle';
// Components
import { Radio } from '../Radio/Radio';

const RadioGroup = (props: RadioGroupProps) => {
  const componentProps = { ...defaultProps, ...props };
  const { classes, items, name, onClick } = componentProps;

  const getSelectedIndex = (): number =>
    items.findIndex(item => item.checked === true);

  const handleClick = (name: string, index: number) => {
    if (typeof onClick === 'function') {
      const selectedIndex = getSelectedIndex();

      if (selectedIndex >= 0) {
        items[selectedIndex].checked = false;
      }

      items[index].checked = true;

      onClick(name, items);
    }
  };

  return (
    <Wrapper classes={classes.wrapper}>
      {items.map((item, index) => (
        <Radio
          {...item}
          classes={{ ...item.classes }}
          key={index}
          name={name}
          onClick={(name: string) => handleClick(name, index)}
        />
      ))}
    </Wrapper>
  );
};

export { RadioGroup };
