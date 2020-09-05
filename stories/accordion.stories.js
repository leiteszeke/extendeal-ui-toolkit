// Dependencies
import React from 'react';
import { storiesOf } from '@storybook/react';
// Components
import { Accordion } from '#components/Accordion/Accordion';
import { AccordionGroup } from '#components/Accordion/AccordionGroup';

// TODO: Check Accordion
storiesOf('Accordion', module)
  .add('Single Accordion', () => <Accordion></Accordion>)
  .add('Group Accordion', () => (
    <AccordionGroup>
      <Accordion></Accordion>
      <Accordion></Accordion>
      <Accordion></Accordion>
    </AccordionGroup>
  ));
