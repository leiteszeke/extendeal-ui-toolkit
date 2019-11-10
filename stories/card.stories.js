// Dependencies
import React from 'react';
import { storiesOf } from '@storybook/react';
// Components
import { Card } from '#components/Card/Card';

const props = {
  email: 'john.doe@example.com',
  image: 'https://picsum.photos/150/150',
  name: 'John Doe',
  phone: '+12 2342 2321',
  role: 'Owner',
};

storiesOf('Card', module).add('Basic Card', () => <Card {...props} />);
