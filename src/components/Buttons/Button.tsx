// Dependencies
import * as React from 'react';
import classnames from 'classnames';
import { objects } from '@extendeal/ext-commons';
// Styled
import { ButtonWrapper } from './ButtonStyle';
// Props
import { ButtonProps, defaultProps } from './ButtonProps';

const validNoMarginProp = (margin: string) =>
  ['top', 'right', 'down', 'left', 'horizontal', 'vertical'].some(position => position === margin);

const Button = (props: ButtonProps) => {
  const componentProps = objects.extend(defaultProps, props);
  const {
    classes,
    label,
    noMargin,
    variant,
  } = componentProps;

  return (
    <ButtonWrapper
      { ...componentProps }
      classes={ classnames(
        variant,
        {
          [`no-margin-${ noMargin }`]: validNoMarginProp(noMargin),
        },
        classes.wrapper,
      )}
    >
      { label }
    </ButtonWrapper>
  );
};

export { Button };
