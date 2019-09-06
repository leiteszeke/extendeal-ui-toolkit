// Props
import { AccordionProps, AccordionClasses } from './AccordionProps';
export interface AccordionGroupProps {
  classes?: AccordionClasses;
  onToggle: Function;
  rows: Array<AccordionProps>;
}

export const defaultProps = {
  classes: {
    body: '',
    dropdown: '',
    dropdownItem: '',
    header: '',
    headerActions: '',
    headerContent: '',
    height: '',
    icon: '',
    wrapper: '',
  } as AccordionClasses,
  onToggle: () => {
    return;
  },
  rows: [{} as AccordionProps],
};
