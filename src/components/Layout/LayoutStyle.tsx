// Dependencies
import styledComponents from 'styled-components';

export const Section = styledComponents<any>('section').attrs(props => ({
  className: props.classes,
  id: props.id,
}))`
  height: 100%;
  width: 100%;
`;

export const Content = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
  id: props.id,
}))`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  height: calc(100% - 48px);
  margin-left: 56px;
  padding: 16px;
  width: calc(100% - 56px);

  @media (max-width: 1040px) {
    height: calc(100% - 112px);
    margin-left: 0;
    position: relative;
    top: 56px;
    width: 100%;
  }
`;
