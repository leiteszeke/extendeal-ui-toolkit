// Dependencies
import * as React from 'react';
// Props
import { AccordionGroupProps, defaultProps } from './AccordionGroupProps';
// Components
import { Accordion } from './Accordion';

const AccordionGroup = (props: AccordionGroupProps) => {
  const componentProps = { ...defaultProps, ...props };
  const { classes, onToggle, rows } = componentProps;

  const getOpenedAccordion = (): number =>
    rows.findIndex(row => row.opened === true);
  const getOpenedActions = (): number =>
    rows.findIndex(row => row.showActions === true);

  const handleOnToggle = (index: number) => {
    if (typeof onToggle === 'function') {
      const selectedIndex = getOpenedAccordion();

      if (selectedIndex >= 0) {
        rows[selectedIndex].opened = false;
      }

      if (selectedIndex !== index) {
        rows[index].opened = true;
      }

      onToggle(rows);
    }
  };

  const handleOnToggleActions = (index: number) => {
    if (typeof onToggle === 'function') {
      const selectedIndex = getOpenedActions();

      if (selectedIndex >= 0) {
        rows[selectedIndex].showActions = false;
      }

      if (selectedIndex !== index) {
        rows[index].showActions = true;
      }

      onToggle(rows);
    }
  };

  return (
    <React.Fragment>
      {rows.map((row, index) => (
        <Accordion
          {...row}
          actions={row.actions}
          classes={classes}
          content={row.content}
          header={row.header}
          key={index}
          onToggle={() => handleOnToggle(index)}
          onToggleActions={() => handleOnToggleActions(index)}
          opened={row.opened}
          showActions={row.showActions}
        />
      ))}
    </React.Fragment>
  );
};

export { AccordionGroup };
