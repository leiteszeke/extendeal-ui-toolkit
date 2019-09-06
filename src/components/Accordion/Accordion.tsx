// Dependencies
import * as React from 'react';
import classnames from 'classnames';
import { i18n } from '@extendeal/ext-commons';
// Styled
import {
  Wrapper,
  Header,
  HeaderContent,
  HeaderActions,
  Icon,
  Body,
} from './AccordionStyle';
// Props
import { AccordionProps, defaultProps } from './AccordionProps';
// Components
import { ArrowDown } from '../Icons/ArrowDown';
import { ArrowUp } from '../Icons/ArrowUp';
import { Dropdown } from '../Dropdown/Dropdown';
import { DropdownItem } from '../Dropdown/DropdownItem';
import { Gray } from '../Colors/Acromathic/Gray';
import { Height } from './../Animations/Height';

const Accordion = (props: AccordionProps) => {
  const componentProps = { ...defaultProps, ...props };
  const {
    actions,
    classes,
    content,
    header,
    onToggle,
    onToggleActions,
    opened,
    showActions,
  } = componentProps;

  const handleToggleActions = (event: Event) => {
    if (typeof event === 'object' && typeof onToggleActions === 'function') {
      onToggleActions();
    }
  };

  const handleToggle = (event: Event) => {
    event.preventDefault();
    event.stopPropagation();

    if (typeof onToggle === 'function') {
      onToggle();
    }
  };

  return (
    <Wrapper classes={classnames(classes.wrapper, { opened })}>
      <Header classes={classes.header}>
        <HeaderContent
          classes={classes.headerContent}
          onClick={(event: Event) => handleToggle(event)}
        >
          {header}
        </HeaderContent>
        <HeaderActions classes={classes.headerActions}>
          {typeof actions !== 'undefined' && actions.length > 0 && (
            <Dropdown
              active={showActions}
              classes={classes.dropdown}
              materialIcon="more_horiz"
              onClick={handleToggleActions}
            >
              {actions.map((action, index) => (
                <DropdownItem classes={classes.dropdownItem} key={index}>
                  {action.translatable === true
                    ? i18n.translate(`actions.${action.name}`)
                    : action.name}
                </DropdownItem>
              ))}
            </Dropdown>
          )}
        </HeaderActions>
        <Icon
          classes={classes.icon}
          onClick={(event: Event) => handleToggle(event)}
        >
          {opened === true && <ArrowUp height={14} width={14} />}
          {opened === false && <ArrowDown height={14} width={14} />}
        </Icon>
      </Header>

      <Height
        classes={classes.height}
        height={opened ? 'auto' : 1}
        style={{ borderBottom: `1px solid ${Gray.S500}` }}
      >
        <Body classes={classes.body}>{content}</Body>
      </Height>
    </Wrapper>
  );
};

export { Accordion };
