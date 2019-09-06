// Props
import { HeaderClasses } from '../Header/HeaderProps';
import { SidebarClasses } from '../Sidebar/SidebarProps';

export interface LayoutProps {
  breadcrumb?: string;
  children?: React.ReactNode;
  classes?: {
    content?: string;
    header?: HeaderClasses;
    section?: string;
    sidebar?: SidebarClasses;
  };
  contentId: string;
  inputValue?: string;
  leftIcon?: React.ReactNode;
  onChange?: Function;
  onSearchChange?: Function;
  onSearchClose?: Function;
  onSearchDelete?: Function;
  onSearchOpen?: Function;
  outsideContent?: React.ReactNode;
  searchPlaceholder?: string;
  searchValue?: string;
  show: boolean;
  showBackButton?: boolean;
  showSearch?: boolean;
  showUserPanel?: boolean;
  title: string;
  willLeave?: boolean;
  withSearch?: boolean;
  withUserPanel?: boolean;
}

export const defaultProps = {
  contentId: `layout_${new Date().getMilliseconds()}`,
  classes: {
    content: '',
    header: {
      wrapper: '',
      leftNavbar: '',
      rightNavbar: '',
      breadcrumb: '',
      link: '',
    },
    section: '',
    sidebar: {
      bottomNavbar: '',
      bottomSidebarMenu: '',
      topNavbar: '',
      topSidebarMenu: '',
      wrapper: '',
    },
  },
  show: false,
  showBackButton: false,
  showSearch: false,
  showUserPanel: false,
  title: 'Extendeal Layout',
  willLeave: false,
  withSearch: false,
  withUserPanel: false,
};
