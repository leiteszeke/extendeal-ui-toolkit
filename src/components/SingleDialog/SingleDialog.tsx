// Dependencies
import * as React from 'react';
import { createPortal } from 'react-dom';
import { objects } from '@extendeal/ext-commons';
// Props
import {
  SingleDialogProps,
  SingleDialogFooterButtonProps,
  defaultProps,
} from './SingleDialogProps';
// Styled
import {
  Wrapper,
  Overlay,
  Header,
  Title,
  Body,
  Text,
  Footer,
} from './SingleDialogStyle';
// Components
import { Button } from '../Buttons/Button';

const SingleDialog = (props:SingleDialogProps) => {
  const {
    classes,
    footerButtons,
    text,
    title,
    portal,
    show,
  } = objects.extend(defaultProps, props);

  if (show === false) {
    return <div />;
  }

  return (
    createPortal(
      <Overlay classes={ classes.overlay }>
        <Wrapper
          classes={ classes.wrapper }
        >
            <Header>
              <Title>{ title }</Title>
            </Header>

            <Body>
              <Text>{ text }</Text>
            </Body>

            <Footer>
              { footerButtons.map((button:SingleDialogFooterButtonProps, index:number) => (
                <Button
                  color={ button.color }
                  key={ index }
                  label={ button.label }
                  noMargin="horizontal"
                  onClick={ button.onClick }
                  variant="flat"
                />
              )) }
            </Footer>
        </Wrapper>
      </Overlay>
      ,
      portal,
    )
  );
};

export { SingleDialog };
