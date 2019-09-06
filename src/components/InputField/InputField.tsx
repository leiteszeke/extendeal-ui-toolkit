// Dependencies
import * as React from 'react';
import classnames from 'classnames';
// Props
import { InputFieldProps, defaultProps } from './InputFieldProps';
// Styled
import {
  Bar,
  GroupDiv,
  HelperText,
  StyledInput,
  StyledLabel,
} from './InputFieldStyle';

const InputField = (props: InputFieldProps) => {
  const componentProps = { ...defaultProps, ...props };
  const {
    id,
    classes,
    color,
    helpText,
    name,
    onChange,
    placeHolder,
    width,
    value,
  } = componentProps;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof onChange === 'function') {
      onChange(name, event.target.value, event);
    }
  };

  const Label = placeHolder && (
    <StyledLabel classes={classes.label}>{placeHolder}</StyledLabel>
  );

  const HelpText = helpText && (
    <HelperText classes={classes.helperText}>{helpText}</HelperText>
  );

  return (
    <GroupDiv classes={classes.div}>
      <StyledInput
        classes={classes.input}
        color={color}
        id={id}
        name={name}
        onChange={handleOnChange}
        value={value}
        required
        width={width}
      />
      <Bar
        classes={classnames('bar', classes.bar)}
        color={color}
        width={width}
      />
      {Label}
      {HelpText}
    </GroupDiv>
  );
};

export { InputField };
