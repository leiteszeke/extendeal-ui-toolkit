// Dependencies
import * as React from 'react';
// Components
import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';
import { Spinner } from '../Spinner/Spinner';
// Props
import { LayoutProps, defaultProps } from './LayoutProps';
// Styled
import { Section, Content } from './LayoutStyle';

const Layout = (props: LayoutProps) => {
  const componentProps = { ...defaultProps, ...props };
  const {
    breadcrumb,
    classes,
    children,
    contentId,
    leftIcon,
    inputValue,
    onChange,
    onSearchChange,
    onSearchClose,
    onSearchDelete,
    onSearchOpen,
    outsideContent,
    searchPlaceholder,
    searchValue,
    show,
    showBackButton,
    showSearch,
    showUserPanel,
    title,
    willLeave,
    withSearch,
    withUserPanel,
  } = componentProps;

  const handleOnChange = () => {
    if (typeof onChange === 'function') {
      onChange();
    }
  };

  const handleOnSearchChange = (value: string) => {
    if (typeof onSearchChange === 'function') {
      onSearchChange(value);
    }
  };

  const handleOnSearchClose = () => {
    if (typeof onSearchClose === 'function') {
      onSearchClose();
    }
  };

  const handleOnSearchDelete = () => {
    if (typeof onSearchDelete === 'function') {
      onSearchDelete();
    }
  };

  const handleOnSearchOpen = () => {
    if (typeof onSearchOpen === 'function') {
      onSearchOpen();
    }
  };

  return (
    <React.Fragment>
      <Section classes={classes.section} id={contentId}>
        <Header
          breadcrumb={breadcrumb}
          classes={classes.header}
          inputValue={inputValue}
          leftIcon={leftIcon}
          onChange={handleOnChange}
          onSearchChange={handleOnSearchChange}
          onSearchClose={handleOnSearchClose}
          onSearchDelete={handleOnSearchDelete}
          onSearchOpen={handleOnSearchOpen}
          searchPlaceholder={searchPlaceholder}
          searchValue={searchValue}
          showBackButton={showBackButton}
          showSearch={showSearch}
          showUserPanel={showUserPanel}
          willLeave={willLeave}
          withSearch={withSearch}
          withUserPanel={withUserPanel}
        />

        <Sidebar classes={classes.sidebar} currentSection={contentId} />

        <Content classes={classes.content}>
          {show === false ? (
            <Spinner title={title} loading={true} relative={true} />
          ) : (
            children
          )}
        </Content>
      </Section>
      {outsideContent}
    </React.Fragment>
  );
};

export { Layout };
