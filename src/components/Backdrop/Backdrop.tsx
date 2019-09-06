// Dependencies
import * as React from 'react';
import { createPortal } from 'react-dom';
import classnames from 'classnames';
import { browser, i18n } from '@extendeal/ext-commons';
// Styled
import {
  BackdropWrapper,
  BackdropHeader,
  Title,
  BackdropContent,
  Overlay,
} from './BackdropStyle';
// Props
import { BackdropProps, defaultProps } from './BackdropProps';
// Components
import { ArrowUp } from '../Icons/ArrowUp';
import { Back } from '../Icons/Back';
import { CircleClose } from '../Icons/CircleClose';
import { Colors } from '../Colors/Colors';
import { Content } from './BackdropContent';
import { Gray } from '../Colors/Acromathic/Gray';
import { SingleDialog } from '../SingleDialog/SingleDialog';

const Backdrop = (props: BackdropProps) => {
  const componentProps = { ...defaultProps, ...props };
  const {
    classes,
    closable,
    closeIntent,
    content,
    dialog,
    headless,
    onClose,
    onCloseDialog,
    onOpen,
    onShowDialog,
    opened,
    title,
    portal,
  } = componentProps;

  const handleClose = () => {
    if (typeof onClose === 'function' && opened === true) {
      if (closeIntent === true) {
        onCloseIntent();
        return;
      }

      onClose();
    }
  };

  const handleOnConfirm = () => {
    if (typeof onClose === 'function' && opened === true) {
      onClose();
    }
  };

  const handleOnReject = () => {
    if (typeof onCloseDialog === 'function') {
      onCloseDialog();
    }
  };

  const handleOpen = () => {
    if (typeof onOpen === 'function' && opened === false) {
      onOpen();
    }
  };

  const onCloseIntent = () => {
    if (typeof onShowDialog === 'function') {
      onShowDialog();
    }
  };

  if (typeof dialog !== 'undefined') {
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
  }

  return (
    createPortal(
      <React.Fragment>
        <Overlay classes={ classnames({ opened }, classes.overlay) } />
        <BackdropWrapper
          classes={
            classnames(
              {
                headless,
                closed: opened === false,
              },
              classes.wrapper,
            )
          }
        >
          <BackdropHeader onClick={ handleOpen }>
              <Title>{ title }</Title>

                {
                  closable === true
                  && opened === true
                  && <CircleClose fillColor={ Colors.Gray.S800 } onClick={ handleClose } />
                }

                {
                  browser.isDesktop() === false
                  && opened === false
                  && headless !== true
                  && (
                    <ArrowUp
                      onClick={ handleOpen }
                      fillColor={ Colors.Gray.S800 }
                      height={ 16 }
                      width={ 16 }
                    />
                  )
                }

                {
                  browser.isDesktop() === true
                  && opened === false
                  && headless !== false
                  && (
                    <Back
                      onClick={ handleOpen }
                      fillColor={ Colors.Gray.S800 }
                      height={ 16 }
                      width={ 16 }
                    />
                  )
                }
            </BackdropHeader>

          {
            React.isValidElement(content)
            ? (
              <BackdropContent classes={ classes.content }>
                { content }
              </BackdropContent>
            )
            : <Content classes={ classes } { ...content } />
          }
        </BackdropWrapper>

        { typeof dialog !== 'undefined' &&
          <SingleDialog
            classes={ dialog.classes }
            footerButtons={ dialog.footerButtons }
            text={ dialog.text }
            title={ dialog.title }
            show={ dialog.show }
          />
        }
      </React.Fragment>,
      portal,
    )
  );
};

export { Backdrop };
