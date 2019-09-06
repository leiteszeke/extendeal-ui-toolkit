// Props
import { DropdownClasses } from '../Dropdown/DropdownProps';
import { DropdownItemClasses } from '../Dropdown/DropdownItemProps';

export interface AccordionProps {
  actions?: Array<ActionProps>;
  classes?: AccordionClasses;
  content?: React.ReactNode;
  header?: React.ReactNode;
  onToggle?: Function;
  onToggleActions?: Function;
  opened: boolean;
  showActions?: boolean;
}

export interface AccordionClasses {
  body?: string;
  dropdown?: DropdownClasses;
  dropdownItem?: DropdownItemClasses;
  header?: string;
  headerActions?: string;
  headerContent?: string;
  height?: string;
  icon?: string;
  wrapper?: string;
}

export interface ActionProps {
  name: string;
  translatable?: boolean;
}

export const defaultProps = {
  actions: [
    {} as ActionProps,
  ],
  classes: {
    body: '',
    dropdown: {
      button: '',
      menu: '',
      text: '',
      wrapper: '',
    },
    dropdownItem: {
      item: '',
      separator: '',
    },
    header: '',
    headerActions: '',
    headerContent: '',
    height: '',
    icon: '',
    wrapper: '',
  } as AccordionClasses,
  opened: false,
  showActions: false,
};
