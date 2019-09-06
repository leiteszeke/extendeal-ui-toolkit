// Dependencies
import * as React from 'react';
import { browser, objects } from '@extendeal/ext-commons';
import classnames from 'classnames';
// Props
import { RadioProps, defaultProps } from './RadioProps';
// Styled
import { Wrapper, Icon, Content, Label } from './RadioStyle';
// Components
import { Gray } from '../Colors/Acromathic/Gray';
import { Milhouse } from '../Colors/Primary/Milhouse';
import { RadioOff } from '../Icons/RadioOff';
import { RadioOn } from '../Icons/RadioOn';

const Radio = (props: RadioProps) => {
  const {
    checked,
    classes,
    disabled,
    label,
    name,
    onClick,
    value,
  } = objects.extend(defaultProps, props);

  const handleClick = () => {
    if (disabled === false && typeof onClick === 'function') {
      onClick(name, value);
    }
  };

  const height = browser.isDesktop() ? 16 : 24;
  const width = browser.isDesktop() ? 16 : 24;

  return (
    <Wrapper
      classes={classnames(
        {
          disabled,
        },
        classes.wrapper,
      )}
      onClick={handleClick}
    >
      <Icon classes={classes.icon}>
        {checked === true && (
          <RadioOn
            fillColor={disabled === true ? Gray.S500 : Milhouse.Mi400}
            height={height}
            width={width}
          />
        )}

        {checked === false && (
          <RadioOff
            fillColor={disabled === true ? Gray.S500 : Gray.S800}
            height={height}
            width={width}
          />
        )}
      </Icon>
      <Content classes={classes.content}>
        <Label classes={classes.label}>{label}</Label>
      </Content>
    </Wrapper>
  );
};

export { Radio };
