// Dependencies
import styledComponents from 'styled-components';
import { utils } from '@extendeal/ext-commons';
// Components
import { Colors } from '../Colors/Colors';

// Default Style
export const defaultStyle =  {
  icon: {
    background: Colors.Garfield.G500,
    border: Colors.Garfield.G500,
    borderError: Colors.Mario.Ma400,
    widthDesktop: '30px',
    widthMobile: '40px',
  },
  borderError: Colors.Mario.Ma400,
  datepickerWidth: '90%',
  helperTextColor: Colors.Mario.Ma400,
};

export const Wrapper = styledComponents<any>('section').attrs(props => ({
  className: props.classes,
  dataDefault: props.dataDefault,
  defaultValue: props.defaultValue,
  onChange: props.onChange,
  style: props.style,
}))`
  font-family: 'Source Sans Pro', sans-serif;
  display: flex;
  height: 28px;
  min-width: 118px;
  width: ${ props => props.datepickerStyle.datepickerWidth };
  color: ${Colors.Gray.S800};
  cursor: pointer;
  position: relative;

  @media (max-width: 1023px) {
    height: 34px;
  }

  .react-datepicker__helperText {
    position: absolute;
    color: ${ props => props.datepickerStyle.helperTextColor };
    left: 8px;

    &.down {
      transform: translate(0, 36px) scale(0.75);
      transform-origin: top left;
    }

    &.up {
      transform: translate(0, -16px) scale(0.75);
      transform-origin: top left;

      &--right {
        transform: translate(calc(100% - 32px),-16px) scale(0.75);
        transform-origin: top left;
      }
    }
  }

  &.hasError {
    & div,
    & article {
      border-color: ${ props => props.datepickerStyle.borderError };
    }
  }

  & .react-datepicker-popper[data-placement^="bottom"],
  .react-datepicker-popper[data-placement^="top"] {
    border: none;
  }

  & .react-datepicker__portal {
    background-color: ${utils.colorWithOpacity(Colors.Gray.S800, 0.3)};

    .react-datepicker {
      display: flex;
      flex-flow: column;
      width: 305px;
      max-width: 305px;
      font-size: 12px;
      height: auto;
      border: none;
      border-radius: 4px;
      background: ${Colors.Gray.level0};

      button.react-datepicker__navigation  {

        &--next {
          width: 10px;
          height: 10px;
          border-width: 0.3vmin .3vmin 0 0;
          border-style: solid;
          border-color: ${Colors.Gray.S800};
          display: block;
          transform: rotate(45deg);
          position: absolute;
          outline: none;
          top: 12px;
          right: 32px;
        }

        &--previous {
          width: 10px;
          height: 10px;
          border-width: 0.3vmin .3vmin 0 0;
          border-style: solid;
          border-color:${Colors.Gray.S800};
          outline: none;
          display: block;
          transform: rotate(225deg);
          position: absolute;
          top: 12px;
          left: 32px;
        }
      }

      &__current-month {
        font-size: 18px;
        font-weight: 600;
        color: ${Colors.Gray.S800};
      }

      &__day-names {
        padding: 0 16px;
        padding-bottom: 12px;
        .react-datepicker__day-name {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 18px;
          padding: 0;
          font-size: 18px;
          color: ${Colors.Gray.S800};
          line-height: 12px;
          margin: 0 4px;
          font-weight: 600;
        }
      }

      &__month {
        width: 100%;
        margin: 0;
        padding-bottom: 12px;
      }

      &__month-container {
          width: 100%;
      }

      &__week {
        margin: 0;
        display: flex;
        padding: 0 16px;
      }

      &__day {
        display: flex;
        width: 32px;
        height: 32px;
        margin: 4px;
        justify-content: center;
        align-items: center;
        padding: 0;
        border-radius: 50%;
        color: ${Colors.Gray.level8};
        font-weight: 400;
        background: transparent;
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-size: 18px;

        &.available {
          background: ${utils.colorWithOpacity(Colors.Milhouse.Mi300, 0.5)};
          color: ${Colors.Gray.level0};
        }

        &--disabled {
          font-weight: 600;
          background-color: transparent;
          color: ${Colors.Gray.S500};
          justify-content: center;
          padding: 0;
        }

        &--selected {
          background-color: ${Colors.Milhouse.Mi400};
          color: ${Colors.Gray.level0};
        }

        &--today {
          font-weight: 600;
          font-size: 18x;
          color: ${Colors.Milhouse.Mi400};
          background: transparent;

          &.react-datepicker__day--selected {
            background: trasparent;
            border: 1px solid ${Colors.Milhouse.Mi400};
          }
        }

        &--highlighted {
          background: ${utils.colorWithOpacity(Colors.Milhouse.Mi300, 0.5)};
          color: ${Colors.Gray.level0};

          &-custom-1{
            background: ${utils.colorWithOpacity(Colors.Milhouse.Mi300, 0.5)};
            color: ${Colors.Gray.level0};

            &.react-datepicker__day--outside-month {
              background: transparent;
            }
          }
        }

        &--outside-month {
          color: transparent;
          pointer-events: none;
          &.react-datepicker__day--highlighted {
            background: transparent;
          }
        }
      }

      &__header {
        width: 100%;
        text-align: center;
        background-color: ${Colors.Gray.level0};
        border-bottom: none;
        padding-top: 0;
        position: relative;

        .react-datepicker__current-month {
          color: ${Colors.Gray.S800};
          font-size: 12px;
          padding-top: 12px;
          margin-bottom: 12px;
          line-height: 12px;
          width: 100%;
          font-weight: 600;
        }

        .react-datepicker__day-names {
          padding-bottom: 12px;
          display: flex;
        }
      }
    }
  }

  & .react-datepicker {
    box-shadow: 1px 4px 17px ${utils.colorWithOpacity(Colors.Gray.level8, 0.2)};

    &__input-container {
      width: 100%;
      height: 25px;
      font-size: 12px;

      input {
        width: 100%;
        height: 25px;
        text-align: center;
        font-size: 12px;
        border-radius: 0 4px 4px 0;
        color:
      }
    }

    &-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      border-radius: 0 4px 4px 0;
      border: 1px solid${Colors.Gray.S400};
      border-left: none;
      width: 100%;
      color: ${Colors.Gray.S800};

      > input {
        width: 100%;
        height: 25px;
      }
    }

    &__triangle {
      display: none;
    }

    &-popper {
      .react-datepicker {
        width: 196px;
        font-size: 12px;
        height: auto;
        padding: 0 16px 12px;
        border: none;
        border-radius: 4px;
        display: flex;
        background: ${Colors.Gray.level0};

        &__header {
          width: 100%;
          text-align: center;
          background-color: ${Colors.Gray.level0};
          border-bottom: none;
          padding-top: 0;
          position: relative;

          .react-datepicker__current-month {
            color: ${Colors.Gray.S800};
            font-size: 12px;
            padding-top: 12px;
            margin-bottom: 12px;

            line-height: 12px;
            width: 100%;
            font-weight: 600;
          }

          .react-datepicker__day-names {
            padding-bottom: 12px;
            display: flex;
          }
        }

        &__month {
          width: 100%;
          margin: 0;
        }

        &__week {
          margin: 0;
          display: flex;
        }

        &__day {
          display: flex;
          width: 20px;
          height: 20px;
          margin: 2px;
          justify-content: center;
          align-items: center;
          padding: 0;
          border-radius: 50%;
          color: ${Colors.Gray.level8};
          background: transparent;
          font-family: 'Source Sans Pro';
          font-style: normal;
          font-weight: 400;
          font-size: 11px;

          &:hover {
            border-radius: 50%;
            background-color: ${Colors.Milhouse.Mi300};
            color: ${Colors.Gray.level0};
            filter: opacity(80%);
          }

          &--disabled {
            font-weight: 600;
            background-color: transparent;
            color: ${Colors.Gray.S500};
            justify-content: center;
            padding: 0;
            pointer-events: none;
          }

          &--selected {
            background-color: ${Colors.Milhouse.Mi300};
            color: ${Colors.Gray.level0};

            &:hover {
              background-color: ${Colors.Milhouse.Mi500};
              border-radius: 50%;
            }
          }

          &.available {
            background: ${utils.colorWithOpacity(Colors.Milhouse.Mi300, 0.5)};
            color: ${Colors.Gray.level0};
          }

          &--highlighted {
            background: ${utils.colorWithOpacity(Colors.Milhouse.Mi300, 0.5)};
            color: ${Colors.Gray.level0};

            &-custom-1{
              background: ${utils.colorWithOpacity(Colors.Milhouse.Mi300, 0.5)};
              color: ${Colors.Gray.level0};

              &.react-datepicker__day--outside-month {
                background: transparent;
              }
            }
          }

          &--outside-month {
            color: transparent;
            pointer-events: none;
            &.react-datepicker__day--highlighted {
              background: transparent;
            }
          }

          &--today {
            font-weight: 600;
            font-size: 11px;
            color: ${Colors.Milhouse.Mi400};
            background: transparent;

            &:hover {
              background: ${Colors.Gray.S400};
              color: ${Colors.Milhouse.Mi400};
            }

            &.react-datepicker__day--selected {
              border: 1px solid ${Colors.Milhouse.Mi400};

              &:hover {
                border: 1px solid rgba( ${Colors.Milhouse.Mi400}, .25);
                border-radius: 50%;
              }
            }
          }
        }
      }

      &[data-placement^="bottom"],
      &[data-placement^="top"] {
        left: unset !important;
        width: 196px;
        transform: translate3d(calc(100% - 74px), 28px, 0px) !important;
      }
    }

    &__day-names {

      .react-datepicker__day-name {
        width: 20px;
        height: 12px;
        padding: 0;
        font-size: 12px;
        color: ${Colors.Gray.S800};
        line-height: 12px;
        margin: 0 2px;
        font-weight: 600;
      }
    }

    &__month-container {
        width: 100%;
    }
  }

  button.react-datepicker__navigation  {

    &--next {
      width: 8px;
      height: 8px;
      border-width: 0.2vmin .2vmin 0 0;
      border-style: solid;
      border-color: ${Colors.Gray.S800};
      display: block;
      transform: rotate(45deg);
      position: absolute;
      outline: none;
      top: 8px;
      margin: 4px;
    }

    &--previous {
      width: 8px;
      height: 8px;
      border-width: 0.2vmin .2vmin 0 0;
      border-style: solid;
      border-color:${Colors.Gray.S800};
      outline: none;
      display: block;
      transform: rotate(225deg);
      position: absolute;
      top: 8px;
      margin: 4px;
    }
  }

  & > div {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    border-radius: 0 4px 4px 0;
    border: 1px solid ${Colors.Gray.S400};
    border-left: none;
    outline: none;
    width: 100%;
    color: ${Colors.Gray.S800};

    @media (max-width: 1023px) {
      height: 34px;
    }

    & .react-datepicker {
      &__input-container {
        width: 100%;
        height: auto;
        font-size: 12px;

        & input {
          width: 100%;
          height: 25px;
          text-align: center;
          font-family: 'Source Sans Pro';
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          border-radius: 0 4px 4px 0;
          padding: 0;
          margin: 0;
          border: none;

          &:focus{
            outline: none;
          }
        }
      }
    }
  `
;

export const HeaderMessage = styledComponents<any>('article').attrs(props => ({
  className: props.classes,
}))`
  font-family: 'Source Sans Pro', sans-serif;
  padding: 12px 16px 0;
  font-weight: 200;
  font-size: 16px;
  color: ${Colors.Gray.S800};
`;

export const DatepickerContent = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
}))`
  font-family: 'Source Sans Pro', sans-serif;
  display: flex;
  font-size: 16px;
  font-weight: 200;
  align-items: center;

  label {
    margin-right: 4px;
    display: flex;
    align-items: center;
    height: 34px;
  }
`;

export const WrapperIcon = styledComponents<any>('article').attrs(props => ({
  className: props.classes,
}))`
  font-family: 'Source Sans Pro', sans-serif;
  min-height: 26px;
  min-width: ${ props => props.datepickerStyle.widthDesktop };
  display: flex;
  width: ${ props => props.datepickerStyle.widthDesktop };
  background: ${ props => props.datepickerStyle.background };
  border-radius: 5px 0 0 5px;
  border: 1px solid  ${ props => props.datepickerStyle.border };
  border-right: none;
  height: 24px;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    height: 34px;
    min-width: ${ props => props.datepickerStyle.widthMobile };
    width: ${ props => props.datepickerStyle.widthMobile };
  }
`;
