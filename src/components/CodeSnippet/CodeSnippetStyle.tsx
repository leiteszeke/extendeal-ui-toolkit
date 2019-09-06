// Dependencies
import styledComponents from 'styled-components';
// Components
import { Beavis } from '../Colors/Institutional/Beavis';
import { White } from '../Colors/Acromathic/White';
import { Milhouse } from '../Colors/Primary/Milhouse';
import { Garfield } from '../Colors/Institutional/Garfield';

export const Wrapper = styledComponents<any>('div')`
  background: ${Beavis.B800};
  color: ${White.level4};
  display: flex;
  font-family: monospace;
  font-size: 10px;

  .boolean,
  .number {
    color: ${Milhouse.Mi600};
  }

  .string {
    color: ${Garfield.G800};
  }
`;

export const NumberColumn = styledComponents<any>('div').attrs(props => ({
  dangerouslySetInnerHTML: { __html: props.content },
}))`
  background: ${Beavis.B900};
  padding: 11px 0;
  width: 24px;

  p {
    font-family: monospace;
    font-size: 10px;
    line-height: 14px;
    margin: 0;
    text-align: center;
  }
`;

export const Code = styledComponents<any>('div')`
  display: flex;
  flex: 1;
  line-height: 14px;
  padding: 12px;
`;
