// Dependencies
import * as React from 'react';
import { numbers } from '@extendeal/ext-commons';
// Styled
import { InputElement, defaultStyle } from './InputStyle';
// Props
import { InputProps } from './InputProps';

const Input = (props: InputProps) =>  {
  let input:HTMLElement;

  const {
    autoComplete,
    classes,
    dataMask,
    defaultValue,
    disabled,
    error,
    id,
    inputStyle,
    maxLength,
    minLength,
    name,
    onChange,
    onInput,
    pattern,
    placeholder,
    readOnly,
    required,
    spellCheck,
    type,
    value,
  } = props;

  const handleOnChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const value = dataMask === true
      ? numbers.demaskFloat(event.target.value)
      : event.target.value;

    if (typeof onChange === 'function') {
      onChange(name, value, event);
    }
  };

  const handleOnInput = (event:React.ChangeEvent<HTMLInputElement>) => {
    const value = dataMask === true
      ? numbers.demaskFloat(event.target.value)
      : event.target.value;

    if (typeof onInput === 'function') {
      onInput(name, value, event);
    }
  };

  const initializeInput = () => {
    if (dataMask === true && input !== null && typeof input !== 'undefined') {
      numbers.maskFloat(input);
    }
  };

  return (
    <InputElement
      autoComplete={ autoComplete ? 'on' :  'off' }
      className={ classes }
      dataDefault={ defaultValue }
      dataMask={ dataMask }
      disabled={ disabled }
      error={ error }
      id={ id }
      inputStyle={{ ...defaultStyle, ...inputStyle }}
      maxLength={ maxLength }
      minLength={ minLength }
      name={ name }
      onChange={ handleOnChange }
      onInput={ handleOnInput }
      pattern={ pattern }
      placeholder={ placeholder }
      readOnly={ readOnly }
      ref={ (el:HTMLElement) => { input = el; initializeInput(); } }
      required={ required }
      spellCheck={ spellCheck }
      type={ type }
      value={ value }
    />
  );
};

export { Input };
