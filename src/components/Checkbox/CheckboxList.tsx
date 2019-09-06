// Dependencies
import * as React from 'react';
import { i18n, objects } from '@extendeal/ext-commons';
// Components
import { Checkbox } from './Checkbox';
import { Gray } from '../Colors/Acromathic/Gray';
import { SingleDialog } from '../SingleDialog/SingleDialog';
// Props
import { CheckboxProps } from './CheckboxProps';
import { CheckboxListProps, defaultProps } from './CheckboxListProps';

const CheckboxList = (props:CheckboxListProps) => {
  const {
    classes,
    dialog,
    items,
    linkable,
    name,
    onClick,
    onCloseDialog,
    onShowDialog,
    showAll,
  } = objects.extend(defaultProps, props);

  if (typeof items === 'undefined' || items.length === 0) {
    return '';
  }

  const handleDelink = (index: number | string) => {
    if (typeof onShowDialog === 'function') {
      onShowDialog(index);
    }
  };

  const handleClick = (index: number | string) => () => {
    if (typeof onClick === 'function') {

      if (index === 'all') {
        const linkeds = items.filter((item:CheckboxProps) => item.linked === true);

        if (linkeds.length > 0) {
          handleDelink(index);
          return;
        }

        const checkValue = !calculateCheckValue();

        items.forEach((item:CheckboxProps) => {
          item.checked = checkValue;
        });
      } else {
        if (items[index].linked === true) {
          handleDelink(index);
          return;
        }

        items[index].checked = !items[index].checked;
      }

      onClick(name, items);
    }
  };

  const calculateCheckValue = () => {
    return items.some((item:CheckboxProps) => item.checked === false) === false
    && items.some((item:CheckboxProps) => item.checked === true) === true;
  };

  const handleOnConfirm = () => {
    if (typeof onClick === 'function') {
      if (typeof dialog.selected === 'number' && dialog.selected >= 0) {
        items[dialog.selected].linked = false;
        items[dialog.selected].checked = !items[dialog.selected].checked;
      } else if (dialog.selected === 'all') {
        const checkValue = !calculateCheckValue();

        items.forEach((item:CheckboxProps) => {
          item.checked = checkValue;
          item.linked = false;
        });
      }

      onClick(name, items);
    }
  };

  const handleOnReject = () => {
    if (typeof onCloseDialog === 'function') {
      onCloseDialog();
    }
  };

  dialog.footerButtons = [
    {
      color: Gray,
      label: dialog.cancelText || i18n.translate('actions.cancel'),
      onClick: handleOnReject,
    },
    {
      label: dialog.confirmText || i18n.translate('actions.confirm'),
      onClick: handleOnConfirm,
    },
  ];

  return (
    <React.Fragment>
      { showAll === true &&
        <Checkbox
          checked={ calculateCheckValue() }
          classes={ classes.showAll }
          key={ -1 }
          name={ name }
          label={ i18n.translate('words.all') }
          linkable={ false }
          linked={ false }
          onClick={ handleClick('all') }
          value={ 'all' }
        />
      }

      { items.map((item:CheckboxProps, index:number) =>
        <Checkbox
          checked={ item.checked }
          classes={ item.classes }
          key={ index }
          name={ item.name }
          label={ item.label }
          linkable={ linkable }
          linked={ item.linked }
          onClick={ handleClick(index) }
          value={ item.value }
        />,
      ) }

      { typeof dialog !== 'undefined' &&
        <SingleDialog
          classes={ dialog.classes }
          footerButtons={ dialog.footerButtons }
          text={ dialog.text }
          title={ dialog.title }
          show={ dialog.show }
        />
      }
    </React.Fragment>
  );
};

export { CheckboxList };
