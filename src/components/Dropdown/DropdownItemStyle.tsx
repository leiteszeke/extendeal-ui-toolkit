// Dependencies
import styledComponents from 'styled-components';
// Components
import { Beavis } from '../Colors/Institutional/Beavis';

export const Item = styledComponents<any>('li').attrs(props => ({
  className: props.classes,
}))`
  color: red;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  height: 32px;
  line-height: 32px;
  list-style: none;
  margin: 0;
  overflow: hidden;
  padding: 0 16px;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;

  &:hover {
    background: ${props => props.color.level3};
  }
`;

export const Separator = styledComponents<any>('hr').attrs(props => ({
  className: props.classes,
}))`
  border: 0;
  border-top: 1px solid ${Beavis.level8};
  margin: 8px 0;
  padding: 0;
`;
