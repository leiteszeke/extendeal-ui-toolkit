// Components
import { Beavis } from '../Colors/Institutional/Beavis';

export interface SidebarProps {
  backgroundColor?: string;
  bottomItems?: Array<any>;
  classes?: SidebarClasses;
  currentSection: string;
  topItems?: Array<any>;
}

export interface SidebarClasses {
  bottomNavbar?: string;
  bottomSidebarMenu?: string;
  topNavbar?: string;
  topSidebarMenu?: string;
  wrapper?: string;
}

export const defaultProps = {
  backgroundColor: Beavis.level10,
  classes: {
    bottomNavbar: '',
    bottomSidebarMenu: '',
    topNavbar: '',
    topSidebarMenu: '',
    wrapper: '',
  },
  currentSection: 'home',
};
