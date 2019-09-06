// Dependencies
import * as React from 'react';
// Props
import { MenuItemProps } from './MenuItemProps';
// Styled
import { Wrapper } from './MenuItemStyle';

const MenuItem = (props: MenuItemProps) => (
  <Wrapper classes={props.classes}>{props.children}</Wrapper>
);

export { MenuItem };
