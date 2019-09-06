
// Dependencies
import * as React from 'react';
import * as ReactDom from 'react-dom';
import classnames from 'classnames';
import { dom } from '@extendeal/ext-commons';
// Styled
import {
  Wrapper,
  Button,
  ButtonText,
  DropdownMenu,
} from './DropdownStyle';
// Props
import { DropdownProps, defaultProps } from './DropdownProps';

const Dropdown = (props: DropdownProps) =>  {
  const componentProps = { ...defaultProps, ...props };
  const {
    active,
    alignRight,
    alignTop,
    children,
    classes,
    color,
    identifier,
    lastElement,
    onClick,
    newContainer,
    text,
    materialIcon,
    withButton,
  } = componentProps;

  const handleOnClick:Function = (event:Event):void => {
    event.stopPropagation();

    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  const handleClickOutside:EventListener = (event:Event):void => {
    if (typeof onClick === 'function') {
      if (
        false === dom.nodeInParent(event.target, identifier, 'id')
        && false === dom.nodeInParent(event.target, `Button_${ identifier }`, 'id')
      ) {
        onClick(false);
      }
    }
  };

  document.addEventListener('mousedown', handleClickOutside);

  const renderComponent:Function = (
    children: React.ReactNode,
    alignRight: boolean,
    alignTop: boolean,
  ): React.ReactNode => {
    const element = (
      <DropdownMenu
        classes={
          classnames(
            {
              right: alignRight,
              top: alignTop,
            },
            classes.menu,
          )
        }
      >
        { children }
      </DropdownMenu>
    );

    if (true === lastElement && 'undefined' !== typeof newContainer) {
      const container = document.querySelector(`.${ newContainer }`);

      if (container !== null) {
        return ReactDom.createPortal(element, container);
      }
    }

    return element;
  };

  return (
    <Wrapper
      classes={ classes.wrapper }
      color={ color }
      identifier={ identifier }
    >
      { withButton === true &&
        <Button
          active={ active }
          color={ color }
          classes={ classes.button }
          identifier={ identifier }
          onClick={ handleOnClick }
        >
          { 'undefined' !== typeof materialIcon &&
            <i className="material-icons">{ materialIcon } </i>
          }

          { 'undefined' !== typeof text &&
            <ButtonText classes={ classes.text }>{ text }</ButtonText>
          }
        </Button>
      }

      { true === active &&
        renderComponent(children, alignRight, alignTop)
      }
    </Wrapper>
  );
};

export { Dropdown };
