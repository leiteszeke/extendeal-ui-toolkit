// Dependencies
import * as React from 'react';
import classnames from 'classnames';
// Styled
import { Container } from './SpinnerStyle';
// Props
import { SpinnerProps, defaultProps } from './SpinnerProps';

const Spinner = (props: SpinnerProps) => {
  const componentProps = { ...defaultProps, ...props };
  const {
    classes,
    horizontal,
    loading,
    style,
    relative,
    title,
  } = componentProps;

  if (loading === false) {
    return <Container classes={classes} />;
  }

  return (
    <Container
      style={style}
      classes={classnames(classes, {
        'Spinner-loading': loading === true,
        'Spinner-horizontal': loading === true && horizontal === true,
        'Spinner-relative': relative === true,
      })}
    >
      <div className="Spinner__wrapper">
        <div className="Spinner__spinner-wrapper">
          <svg className="Spinner__spinner" viewBox="25 25 50 50">
            <circle className="Spinner__wheel" cx="50" cy="50" r="20" />
            <circle
              className="Spinner__arc"
              cx="50"
              cy="50"
              r="20"
              fill="none"
              strokeWidth="4px"
              strokeMiterlimit="10"
            />
          </svg>
        </div>
        <span className="Spinner__message">{title}</span>
      </div>
    </Container>
  );
};

export { Spinner };
