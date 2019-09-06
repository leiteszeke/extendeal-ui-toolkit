// Dependencies
import * as React from 'react';
import { browser } from '@extendeal/ext-commons';
// Components
import { Back } from '../Icons/Back';
import { MoreVert } from '../Icons/MoreVert';
import { Colors } from '../Colors/Colors';
import { Dropdown } from '../Dropdown/Dropdown';
import { DropdownItem } from '../Dropdown/DropdownItem';
import { MobileSearch } from '../MobileSearch/MobileSearch';
// Props
import { HeaderProps, defaultProps } from './HeaderProps';
// Styled
import {
  HeaderWrapper,
  LeftNavbar,
  RightNavbar,
  Breadcrumb,
  Link,
  IconWrapper,
  Separator,
} from './HeaderStyle';

const Header = (props:HeaderProps) => {
  const componentProps = { ...defaultProps, ...props };
  const {
    backgroundColor,
    breadcrumb,
    classes,
    history: {
      goBack,
    },
    leftIcon,
    logoHeader,
    menuItems,
    onLogoClick,
    onSearchChange,
    onSearchClose,
    onSearchDelete,
    onSearchOpen,
    onUserPanel,
    searchPlaceholder,
    searchValue,
    showBackButton,
    showSearch,
    showUserPanel,
    withSearch,
    withUserPanel,
  } = componentProps;

  const handleGoBack = () => {
    if (typeof goBack === 'function') {
      goBack();
    }
  };

  const handleLogoClick = () => {
    if (typeof onLogoClick === 'function') {
      onLogoClick();
    }
  };

  const handleUserPanel = () => {
    if (typeof onUserPanel === 'function') {
      onUserPanel();
    }
  };

  const handleOnSearchChange = (value:string) => {
    if (typeof onSearchChange === 'function') {
      onSearchChange(value);
    }
  };

  const handleOnSearchClose = () => {
    if (typeof onSearchClose === 'function') {
      onSearchClose();
    }
  };

  const handleOnSearchDelete = () => {
    if (typeof onSearchDelete === 'function') {
      onSearchDelete();
    }
  };

  const handleOnSearchOpen = () => {
    if (typeof onSearchOpen === 'function') {
      onSearchOpen();
    }
  };

  return (
    <HeaderWrapper
      backgroundColor={ backgroundColor }
      classes={ classes.wrapper }
    >
      <LeftNavbar
        classes={ classes.leftNavbar }
      >
        { showBackButton === true &&
          <Back
            backgroundColor={ 'transparent' }
            fillColor={ Colors.White.level4 }
            height={ 24 }
            onClick={ handleGoBack }
            width={ 24 }
          />
        }

        { showBackButton === false && typeof leftIcon !== 'undefined'
          ? leftIcon
          : ''
        }
      </LeftNavbar>

      { browser.isDesktop() === false && typeof breadcrumb !== 'undefined'
        ? (
          <Breadcrumb classes={ classes.breadcrumb }>
            { breadcrumb }
          </Breadcrumb>
        )
        : (
          <Link classes={ classes.link } onClick={ handleLogoClick } >
            { logoHeader }
          </Link>
        )
      }

      <RightNavbar classes={ classes.rightNavbar }>
        { withSearch === true && (
          <MobileSearch
            inputValue={ searchValue }
            onChange={ handleOnSearchChange }
            onClose={ handleOnSearchClose }
            onDelete={ handleOnSearchDelete }
            onOpen={ handleOnSearchOpen }
            opened={ showSearch }
            placeHolder={ searchPlaceholder }
          />
        ) }

        { withUserPanel === true
          ? (
            <React.Fragment>
              <IconWrapper
                classes={ typeof classes.userPanel !== 'undefined'
                  ? classes.userPanel.wrapper
                  : ''
                }
              >
                <MoreVert
                  backgroundColor={ 'transparent' }
                  fillColor={ Colors.White.level4 }
                  height={ 24 }
                  onClick={ handleUserPanel }
                  width={ 24 }
                />
              </IconWrapper>

              <Dropdown
                active={ showUserPanel }
                classes={ typeof classes.userPanel !== 'undefined'
                  ? classes.userPanel.dropdown
                  : ''
                }
                withButton={ false }
              >
                { typeof menuItems !== 'undefined'
                  ? menuItems.map(item => (
                    item.isSeparator === true
                      ? (
                        <DropdownItem classes={ item.classes }>
                          <Separator classe={ item.separatorClasses } />
                        </DropdownItem>
                      )
                      : (
                        <DropdownItem
                          classes={ item.classes }
                          onClick={ item.onClick }
                        >
                          { item.label }
                        </DropdownItem>
                      )
                    ),
                  )
                  : ''
                }
              </Dropdown>
            </React.Fragment>
          )
          : ''
        }
      </RightNavbar>
    </HeaderWrapper>
  );
};

export { Header };
