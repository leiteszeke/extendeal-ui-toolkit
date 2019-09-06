// Dependencies
import * as React from 'react';
import classnames from 'classnames';
import { objects } from '@extendeal/ext-commons';
// Props
import { SelectProps, SelectOptionProps, defaultProps } from './SelectProps';
// Styled
import {
  Wrapper,
  Input,
  Options,
  Option,
  OptionLabel,
  Label,
} from './SelectStyle';
// Components
import { ArrowDown } from '../Icons/ArrowDown';
import { ArrowUp } from '../Icons/ArrowUp';

const Select = (props:SelectProps) => {
  const {
    autoHide,
    classes,
    items,
    name,
    onSelect,
    onToggle,
    opened,
    placeHolder,
    selected,
  } = objects.extend(defaultProps, props);

  const handleOnSelect = (item:SelectOptionProps) => () => {
    if (typeof onSelect === 'function') {
      onSelect(name, item);

      if (autoHide) {
        onToggle();
      }
    }
  };

  const handleToggle = () => {
    if (typeof onToggle === 'function') {
      onToggle();
    }
  };

  return (
    <Wrapper classes={ classes.wrapper }>
      <Input
        classes={ classes.input }
        onClick={ handleToggle }
      >
        { typeof placeHolder !== 'undefined' &&
          <Label
            classes={ classnames(
              {
                'option-selected': selected !== false,
              },
              classes.label,
            ) }
          >
            { placeHolder }
          </Label>
        }

        { selected !== false &&
          <Option
            classes={ classnames(
              'option-selected',
              classes.selected,
            ) }
          >
            { selected.label }
          </Option>
        }

        { opened === false
          ? (
            <ArrowDown
              height={ 9 }
              style={{
                right: 8,
                position: 'absolute',
                top: 32,
              }}
              width={ 9 }
            />
          )
          : (
            <ArrowUp
              height={ 9 }
              style={{
                right: 8,
                position: 'absolute',
                top: 32,
              }}
              width={ 9 }
            />
          )
        }
      </Input>

      { opened === true &&
        <Options classes={ classes.options }>
          { typeof items !== 'undefined' && items.map((item:SelectOptionProps) => (
            <Option
              classes={ classnames(
                {
                  selected: item.selected || selected.value === item.value,
                },
                typeof item.classes !== 'undefined'
                  ? item.classes.option
                  : '',
              ) }
              key={ item.value }
              onClick={ handleOnSelect(item) }
            >
              <OptionLabel
                classes={
                  typeof item.classes !== 'undefined'
                    ? item.classes.label
                    : ''
                }
              >
                { item.label }
              </OptionLabel>
            </Option>
          )) }
        </Options>
      }
    </Wrapper>
  );
};

export { Select };
