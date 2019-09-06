// Dependencies
import * as React from 'react';
import classnames from 'classnames';
import moment from 'moment';
// tslint:disable-next-line
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { browser } from '@extendeal/ext-commons';
// Components
import { Calendar } from '../Icons/Calendar';
import { Colors } from '../Colors/Colors';
// Styled
import {
  Wrapper,
  WrapperIcon,
  HeaderMessage,
  DatepickerContent,
  defaultStyle,
} from './DatepickerStyle';
// Props
import {
  DateRange,
  DateRangeArray,
  DatepickerProps,
  defaultProps,
} from './DatepickerProps';

const Datepicker = (props:DatepickerProps) => {
  const componentProps = { ...defaultProps, ...props };
  const {
    classes,
    name,
    label,
    error,
    minDate,
    selected,
    onChange,
    startDate,
    helperText,
    withPortal,
    helperTextUp,
    helperTextUpRight,
    excludeDates,
    errorMessage,
    helperTextDown,
    highlightDates,
    datepickerStyle,
    highlightWithRanges,
  } = componentProps;

  const handleOnChange = (date:Date) => {
    if (typeof onChange === 'function') {
      onChange(name, date);
    }
  };

  const DateRanges = (props:Array<DateRange>):Array<DateRangeArray> => {
    const dates = Array<DateRangeArray>();

    props.forEach((dateRange:DateRange) => {
      const internDates = Array<Date>();
      const { dateFrom, dateTo, className } = dateRange;
      const initialDate = moment(dateFrom).add(1, 'days');

      while (initialDate.isSameOrBefore(moment(dateTo).add(1, 'days'))) {
        internDates.push(new Date(initialDate.format('YYYY-MM-DD')));
        initialDate.add(1, 'days');
      }

      dates.push({ className, range: internDates });
    });

    return dates;
  };

  const getHightlightDates = () => {
    const highlight:any = [];
    const ranges = DateRanges(highlightWithRanges);

    ranges.forEach((range, index) => {
      const array:any = [];
      const idx = typeof range.className !== 'undefined'
        ? ` ${range.className}`
        : `react-datepicker__day--highlighted-custom-${index}`;

      array[idx] = range.range;
      highlight.push(array);
    });

    return highlight;
  };

  const CalendarContainer = (props:any) => {
    const {
      className,
      children,
    } = props;

    return (
      <div className={className}>
        <HeaderMessage>{ label }</HeaderMessage>
        <div style={{ position: 'relative' }}>
          {children}
        </div>
      </div>
    );
  };

  return (
    <DatepickerContent classes={ classes.content }>
      { label && <label>{ label }:</label> }
      <Wrapper
        classes={ classnames(
          {
            hasError: error === true,
          },
          classes.wrapper,
        ) }
        datepickerStyle={{ ...defaultStyle, ...datepickerStyle }}
      >
        <WrapperIcon
          classes={ classes.icon }
          datepickerStyle={{ ...defaultStyle.icon, ...datepickerStyle }}
        >
          <Calendar
            fillColor={ Colors.Gray.level0 }
            height={ browser.isDesktop() ? 12 : 14 }
            width={ browser.isDesktop() ? 12 : 14 }
          />
        </WrapperIcon>
        <DatePicker
          calendarContainer={
            browser.isDesktop() === false || withPortal === true
              ? CalendarContainer
              : undefined
          }
          className={ classes.datepicker }
          excludeDates={ excludeDates }
          highlightDates={ highlightDates || getHightlightDates() }
          minDate={ minDate }
          onChange={ handleOnChange }
          placeholderText= "-- / -- / --"
          selected={ selected }
          startDate={ startDate }
          withPortal={ browser.isDesktop() === false ||  withPortal === true}
        />

        {
          (helperText !== '' || errorMessage !== '')
          && (helperTextUp === true || helperTextDown === true)
          && error === true
          && (
            <span className={
              classnames(
                {
                  'react-datepicker__helperText up': helperTextUp,
                  'react-datepicker__helperText down': helperTextDown,
                  'react-datepicker__helperText up--right': helperTextUpRight,
                },
                classes.helperText,
              )
            }>
              { helperText || errorMessage}
            </span>
          )
        }
      </Wrapper>
    </DatepickerContent>
  );
};

export { Datepicker };
