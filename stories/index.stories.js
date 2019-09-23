// Dependencies
import React from 'react';
import { storiesOf } from '@storybook/react';
// Components
import { Button } from '../src/components/Buttons/Button.tsx';

storiesOf('Button', module).add('First Button', () => <Button label="Hello" />);
