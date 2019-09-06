// Depenendencies
import * as React from 'react';
// Components
import { Beavis } from '../Colors/Institutional/Beavis';
// Styled
import { Image } from './HeaderStyle';
import { DropdownClasses } from '../Dropdown/DropdownProps';

export interface HeaderProps {
  backgroundColor?: string;
  breadcrumb?: string;
  classes?: HeaderClasses;
  history?: {
    goBack?: Function;
  };
  inputValue?: string;
  leftIcon?: React.ReactNode;
  logoHeader?: HTMLElement | HTMLImageElement | React.ReactNode;
  menuItems?: Array<any>;
  onChange?: Function;
  onChangePasswordShow?: Function;
  onCustomerSupportShow?: Function;
  onLeaveModalShow?: Function;
  onLogoClick?: Function;
  onSearchChange?: Function;
  onSearchClose?: Function;
  onSearchDelete?: Function;
  onSearchOpen?: Function;
  onUserPanel?: Function;
  searchPlaceholder?: string;
  searchValue?: string;
  showBackButton: boolean;
  showSearch: boolean;
  showUserPanel: boolean;
  willLeave: boolean;
  withSearch: boolean;
  withUserPanel: boolean;
}

export interface HeaderClasses {
  wrapper?: string;
  leftNavbar?: string;
  rightNavbar?: string;
  breadcrumb?: string;
  link?: string;
  userPanel?: {
    wrapper?: string;
    dropdown?: DropdownClasses;
  };
}

export const defaultProps = {
  backgroundColor: Beavis.level10,
  classes: {
    wrapper: '',
    leftNavbar: '',
    rightNavbar: '',
    breadcrumb: '',
    link: '',
    userPanel: {
      wrapper: '',
      dropdown: {},
    },
  },
  history: {
    goBack: undefined,
  },
  logoHeader: (
    <Image source="https://test.extendeal.com/images/common/logo-extendeal.svg" />
  ),
  showBackButton: false,
  showSearch: false,
  showUserPanel: false,
  willLeave: false,
  withSearch: false,
  withUserPanel: false,
};
