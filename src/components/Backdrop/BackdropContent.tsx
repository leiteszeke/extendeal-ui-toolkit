// Dependencies
import * as React from 'react';
import classnames from 'classnames';
// Components
import { Button } from '../Buttons/Button';
// Props
import { BackdropContentProps, defaultProps } from './BackdropContentProps';
// Styled
import { BackdropContent, BackdropFooter } from './BackdropStyle';

const Content = (props: BackdropContentProps) => {
  const componentProps = { ...defaultProps, ...props };
  const { body, buttons, classes, footerType } = componentProps;

  return (
    <React.Fragment>
      <BackdropContent classes={classes.content}>{body}</BackdropContent>

      {footerType && (
        <BackdropFooter
          classes={classnames(
            {
              'with-buttons': footerType === 'buttons',
              'with-content': footerType === 'content',
            },
            classes.footer,
          )}
        >
          {typeof buttons !== 'undefined' &&
            buttons.map((btn: any, index: number) => (
              <Button
                classes={btn.classes}
                key={index}
                noMargin={btn.noMargin}
                onClick={btn.onClick}
                variant="flat"
              >
                {btn.label}
              </Button>
            ))}
        </BackdropFooter>
      )}
    </React.Fragment>
  );
};

export { Content };
