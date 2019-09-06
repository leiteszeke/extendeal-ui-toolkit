// Dependencies
import * as React from 'react';
import classnames from 'classnames';
// Props
import { MobileSearchProps, defaultProps } from './MobileSearchProps';
// Styled
// Styled
import {
  IconWrapper,
  Input,
  LeftIcon,
  Overlay,
  RightIcon,
  Wrapper,
} from './MobileSearchStyle';
// Components
import { Search } from '../Icons/Search';
import { White } from '../Colors/Acromathic/White';
import { Close } from '../Icons/Close';
import { ArrowBack } from '../Icons/ArrowBack';
import { Gray } from '../Colors/Acromathic/Gray';

const MobileSearch = (props: MobileSearchProps) => {
  const componentProps = { ...defaultProps, ...props };
  const {
    classes,
    inputValue,
    onChange,
    onClose,
    onDelete,
    onOpen,
    opened,
    placeHolder,
  } = componentProps;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof onChange === 'function') {
      onChange(event.target.value);
    }
  };

  const handleOnClose = () => {
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  const handleOnDelete = () => {
    if (typeof onDelete === 'function') {
      onDelete();
    }
  };

  const handleOnOpen = () => {
    if (typeof onOpen === 'function') {
      onOpen();
    }
  };

  return (
    <React.Fragment>
      <IconWrapper classes={classes.iconWrapper}>
        <Search
          fillColor={White.level4}
          height={23}
          onClick={handleOnOpen}
          width={23}
        />
      </IconWrapper>

      <Wrapper classes={classnames({ opened }, classes.wrapper)}>
        <LeftIcon classes={classes.leftIcon}>
          <ArrowBack
            fillColor={Gray.S800}
            height={21}
            onClick={handleOnClose}
            width={21}
          />
        </LeftIcon>
        <Input
          classes={classes.input}
          inputValue={inputValue}
          onChange={handleOnChange}
          placeHolder={placeHolder}
        />
        {typeof inputValue !== 'undefined' && inputValue !== '' && (
          <RightIcon classes={classes.rightIcon}>
            <Close
              fillColor={Gray.S800}
              height={21}
              onClick={handleOnDelete}
              width={21}
            />
          </RightIcon>
        )}
      </Wrapper>
      <Overlay classes={classnames({ opened }, classes.overlay)} />
    </React.Fragment>
  );
};

export { MobileSearch };
