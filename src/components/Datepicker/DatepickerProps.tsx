export interface DateRange {
  className?: string;
  dateFrom: Date;
  dateTo: Date;
}

export interface DateRangeArray {
  className?: string;
  range: Array<Date>;
}

export interface DatepickerProps {
  classes?: {
    content?: string;
    datepicker?: string;
    helperText?: string;
    icon?: string;
    wrapper?: string;
  };
  datepickerStyle?: object;
  error?: boolean;
  errorMessage?: string;
  excludeDates?: Array<Date>;
  helperText?: string;
  helperTextDown?: boolean;
  helperTextUp?: boolean;
  helperTextUpRight?: string;
  highlightDates?: Array<Date>;
  highlightWithRanges?: Array<DateRange>;
  label?: string;
  minDate?: Date;
  name: string;
  onChange?: Function;
  selected?: Date;
  startDate?: Date;
  withPortal?: boolean;
}

export const defaultProps = {
  classes: {
    content: '',
    datepicker: '',
    helperText: '',
    icon: '',
    wrapper: '',
  },
  highlightWithRanges: [],
};
