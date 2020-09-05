// Dependencies
import React from 'react';
import { storiesOf } from '@storybook/react';
// Components
import { Button } from '#components/Buttons/Button';
import { IconButton } from '#components/Buttons/IconButton';

storiesOf('Button', module)
  .add('Button Classic', () => (
    <Button label="Classic Button" variant="classic" />
  ))
  .add('Button Outline', () => (
    <Button label="Outline Button" variant="outline" />
  ))
  .add('Button Flat', () => <Button label="Flat Button" variant="flat" />);
