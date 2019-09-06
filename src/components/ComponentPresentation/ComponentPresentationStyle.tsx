// Dependencies
import styledComponents from 'styled-components';
// Components
import { Colors } from '../Colors/Colors';
import { Shadow } from '../Shadow/Shadow';

export const Wrapper = styledComponents<any>('div')`
  background: ${Colors.White.level4};
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  font-family: 'Source Sans Pro';
  overflow: auto;
  padding: 12px;
  height: 100%;
  width: 100%;
`;

export const Box = styledComponents<any>('div')`
  box-shadow: ${Shadow.level1};
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  padding: 12px;
  width: 100%;
`;

export const TopSection = styledComponents<any>('div')`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const Title = styledComponents<any>('p')`
  font-size: 28px;
  font-weight: 700;
  margin: 0;
  margin-bottom: 20px;
  width: 100%;
`;

export const SectionTitle = styledComponents<any>('p')`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  margin-bottom: 20px;
  width: 100%;
`;

export const Subtitle = styledComponents<any>('p')`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 20px;
  width: 100%;
`;

export const Description = styledComponents<any>('p')`
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  margin-bottom: 20px;
  width: 100%;
`;

export const HowToUse = styledComponents<any>('div')`
  align-items: center;
  background: ${Colors.White.level4};
  box-sizing: border-box;
  box-shadow: ${Shadow.level1};
  color: ${Colors.Milhouse.Mi500};
  display: flex;
  height: 50px;
  margin-bottom: 20px;
  padding: 10px 20px;
  width: 100%;

  .name {
    color: ${Colors.Gray.S800};
  }

  .library {
    color: ${Colors.Mario.Ma500};
  }
`;

export const TableHead = styledComponents<any>('div')`
  border-bottom: 1px solid ${Colors.Gray.S700};
  box-sizing: border-box;
  display: flex;
  flex-wrap: nowrap;
  height: 50px;
  padding: 12px;
  width: 100%;

  .table-props-item {
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: flex-start;

    &.name,
    &.type,
    &.default {
      width: 20%;
    }

    &.description {
      width: 40%;
    }
  }

  .table-styles-item {
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: flex-start;

    &.name {
      width: 30%;
    }

    &.description {
      width: 70%;
    }
  }

  .header {
    font-weight: 600;
  }
`;

export const TableRow = styledComponents<any>('div')`
  border-bottom: 1px solid ${Colors.Gray.S700};
  box-sizing: border-box;
  display: flex;
  flex-wrap: nowrap;
  min-height: 50px;
  padding: 12px;
  width: 100%;

  .table-props-item {
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: flex-start;

    &.name,
    &.type,
    &.default {
      width: 20%;
    }

    &.description {
      width: 40%;
    }
  }

  .table-styles-item {
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: flex-start;

    &.name {
      width: 30%;
    }

    &.description {
      width: 70%;
    }
  }
`;
