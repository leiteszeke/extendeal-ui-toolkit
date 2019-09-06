// Dependencies
import * as React from 'react';
// Components
import { MenuItem } from '../MenuItem/MenuItem';
import { IconButton } from '../Buttons/IconButton';
// Props
import { SidebarProps, defaultProps } from './SidebarProps';
// Styled
import {
  Wrapper,
  TopNavbar,
  SidebarMenu,
  Link,
  BottomNavbar,
} from './SidebarStyle';

const Sidebar = (props:SidebarProps) => {
  const componentProps = { ...defaultProps, ...props };
  const {
    backgroundColor,
    bottomItems,
    classes,
    currentSection,
    topItems,
  } = componentProps;

  return (
    <Wrapper
      backgroundColor={ backgroundColor }
      classes={ classes.wrapper }
    >
      <TopNavbar classes={ classes.topNavbar }>
        <SidebarMenu classes={ classes.topSidebarMenu }>
          { typeof topItems !== 'undefined'
            ? topItems.map((item, index) => (
              <MenuItem classes={ item.classes.menuItem } key={ index }>
                { typeof item.element !== 'undefined'
                  ? item.element
                  : (
                    <Link classes={ item.classes.link } onClick={ item.onClick }>
                      <IconButton
                        backgroundColor={ item.color }
                        classes={ item.classes.iconButton }
                        icon={ currentSection === item.sectionId
                          ? item.icon.active
                          : item.icon.normal
                        }
                        label={ item.label }
                      />
                    </Link>
                  )
                }
              </MenuItem>
            ))
            : ''
          }
        </SidebarMenu>
      </TopNavbar>

      <BottomNavbar classes={ classes.bottomNavbar }>
        <SidebarMenu classes={ classes.bottomSidebarMenu}>
          { typeof bottomItems !== 'undefined'
            ? bottomItems.map((item, index) => (
              <MenuItem classes={ item.classes.menuItem } key={ index }>
                { typeof item.element !== 'undefined'
                  ? item.element
                  : (
                    <Link classes={ item.classes.link } onClick={ item.onClick }>
                      <IconButton
                        backgroundColor={ item.color }
                        classes={ item.classes.iconButton }
                        icon={ currentSection === item.sectionId
                          ? item.icon.active
                          : item.icon.normal
                        }
                        label={ item.label }
                      />
                    </Link>
                  )
                }
              </MenuItem>
            ))
            : ''
          }
        </SidebarMenu>
      </BottomNavbar>
    </Wrapper>
  );
};

export { Sidebar };
