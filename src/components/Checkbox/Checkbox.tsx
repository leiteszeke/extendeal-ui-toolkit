// Dependencies
import * as React from 'react';
import { browser, objects } from '@extendeal/ext-commons';
import classnames from 'classnames';
// Props
import { CheckboxProps, defaultProps } from './CheckboxProps';
// Styled
import { Wrapper, Icon, Content, Label } from './CheckboxStyle';
// Components
import { CheckBoxOff } from '../Icons/CheckBoxOff';
import { CheckBoxOn } from '../Icons/CheckBoxOn';
import { Gray } from '../Colors/Acromathic/Gray';
import { Link } from '../Icons/Link';
import { Milhouse } from '../Colors/Primary/Milhouse';

const Checkbox = (props: CheckboxProps) => {
  const {
    checked,
    classes,
    disabled,
    label,
    linkable,
    linked,
    name,
    onClick,
    value,
  } = objects.extend(defaultProps, props);

  const height = browser.isDesktop() ? 16 : 24;
  const width = browser.isDesktop() ? 16 : 24;

  const handleClick = () => {
    if (disabled === false && typeof onClick === 'function') {
      onClick(name, value);
    }
  };

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
      <Icon classes={classes.check}>
        {checked === true && (
          <CheckBoxOn
            fillColor={disabled === true ? Gray.S500 : Milhouse.Mi400}
            height={height}
            width={width}
          />
        )}

        {checked === false && (
          <CheckBoxOff
            fillColor={disabled === true ? Gray.S500 : Gray.S800}
            height={height}
            width={width}
          />
        )}
      </Icon>
      <Content classes={classes.content}>
        <Label classes={classes.label}>{label}</Label>
      </Content>

      {linkable === true && (
        <Icon classes={classes.icon}>
          {linked === true && (
            <Link fillColor={Gray.S700} height={height} width={width} />
          )}
        </Icon>
      )}
    </Wrapper>
  );
};

export { Checkbox };
