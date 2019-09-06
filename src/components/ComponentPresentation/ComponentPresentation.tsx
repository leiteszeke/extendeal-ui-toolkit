// Dependencies
import * as React from 'react';
// Styled
import {
  Wrapper,
  TopSection,
  Title,
  Subtitle,
  Description,
  HowToUse,
  Box,
  SectionTitle,
  TableHead,
  TableRow,
} from './ComponentPresentationStyle';
// Props
import {
  ComponentPresentationProps,
  ComponentPropertiesProps,
  ComponentStylesProps,
} from './ComponentPresentationProps';

const ComponentPresentation = (props:ComponentPresentationProps) => {
  const {
    children,
    componentProps,
    componentStyles,
    description,
    library,
    name,
    subtitle,
    title,
  } = props;

  return (
    <Wrapper>
      <TopSection>
        <Title>{ title }</Title>
        <Subtitle>{ subtitle }</Subtitle>
        <Description>{ description }</Description>

        <HowToUse>
          import
          &nbsp;<span className="name">{ name }</span>
          &nbsp;from
          &nbsp;<span className="library">'{ library }';</span>
        </HowToUse>
      </TopSection>

      { typeof componentProps !== 'undefined' && (
        <Box>
          <SectionTitle>Props</SectionTitle>
          <TableHead>
            <div className="table-props-item header name">Name</div>
            <div className="table-props-item header type">Type</div>
            <div className="table-props-item header default">Default</div>
            <div className="table-props-item header description">Description</div>
          </TableHead>
          { componentProps.map((prop:ComponentPropertiesProps, index:number) => (
            <TableRow key={ index }>
              <div className="table-props-item name">{ prop.name }</div>
              <div className="table-props-item type">{ prop.type }</div>
              <div className="table-props-item default">{ prop.default }</div>
              <div className="table-props-item description">{ prop.description }</div>
            </TableRow>
          )) }
        </Box>
      ) }

      { typeof componentStyles !== 'undefined' && (
        <Box>
          <SectionTitle>Styles</SectionTitle>
          <Description>
            You can override all the styles named.
            This property accepts the following keys:
          </Description>

          <TableHead>
            <div className="table-styles-item header name">Name</div>
            <div className="table-styles-item header description">Description</div>
          </TableHead>
          { componentStyles.map((style:ComponentStylesProps, index:number) => (
            <TableRow key={ index }>
              <div className="table-styles-item name">{ style.name }</div>
              <div className="table-styles-item description">{ style.description }</div>
            </TableRow>
          )) }
        </Box>
      ) }

      { typeof children !== 'undefined' && (
        <Box>
          <SectionTitle>Demo</SectionTitle>

          { children }
        </Box>
      ) }
    </Wrapper>
  );
};

export { ComponentPresentation };
