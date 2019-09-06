// Dependencies
import * as React from 'react';
import classnames from 'classnames';
// Styled
import { Wrapper, TextContainer, ActionButton } from './SnackbarStyle';
// Props
import { SnackbarProps, defaultProps } from './SnackbarProps';
// Components
import { Button } from '../Buttons/Button';
import { White } from '../Colors/Acromathic/White';

const Snackbar = (props: SnackbarProps) => {
  const componentProps = { ...defaultProps, ...props };
  const { classes, text, textButton, type } = componentProps;

  return (
    <Wrapper classes={classnames([type], classes.wrapper)}>
      <TextContainer classes={classes.text}>{text}</TextContainer>
      <ActionButton classes={classes.action}>
        <Button color={White} noMargin="right" variant="flat">
          {textButton}
        </Button>
      </ActionButton>
    </Wrapper>
  );
};

export { Snackbar };
