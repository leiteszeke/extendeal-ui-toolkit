// Dependencies
import styledComponents from 'styled-components';
// Components
import { Gray } from '../Colors/Acromathic/Gray';

export const Wrapper = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
}))`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  padding: 0;
  width: 100%;
`;

export const Header = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
}))`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 45px;

  ${Wrapper}.opened & {
    border-bottom: 1px solid ${Gray.S500}
  }
`;

export const HeaderContent = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
  onClick: props.onClick,
}))`
  align-items: center;
  display: flex;
  height: 100%;
  width: 80%;
`;

export const HeaderActions = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
}))`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 10%;
`;

export const Icon = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
  onClick: props.onClick,
}))`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 10%;
`;

export const Body = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
}))`

`;
