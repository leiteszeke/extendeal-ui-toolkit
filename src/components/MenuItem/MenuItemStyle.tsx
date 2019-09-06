// Dependencies
import styledComponents from 'styled-components';

export const Wrapper = styledComponents<any>('li').attrs(props => ({
  className: props.classes,
}))`
  display: flex;
  justify-content: center;
`;
