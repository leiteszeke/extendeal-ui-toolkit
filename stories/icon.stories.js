// Dependencies
import React from 'react';
import { storiesOf } from '@storybook/react';
// Components
import { ArrowBack } from '#components/Icons/ArrowBack';
import { ArrowDown } from '#components/Icons/ArrowDown';
import { ArrowUp } from '#components/Icons/ArrowUp';
import { Back } from '#components/Icons/Back';
import { Calendar } from '#components/Icons/Calendar';
import { CheckBoxOff } from '#components/Icons/CheckBoxOff';
import { CheckBoxOn } from '#components/Icons/CheckBoxOn';
import { CircleClose } from '#components/Icons/CircleClose';
import { Close } from '#components/Icons/Close';
import { Filter } from '#components/Icons/Filter';
import { Link } from '#components/Icons/Link';
import { LogoMono } from '#components/Icons/LogoMono';
import { Management } from '#components/Icons/Management';
import { MoreVert } from '#components/Icons/MoreVert';
import { RadioOff } from '#components/Icons/RadioOff';
import { RadioOn } from '#components/Icons/RadioOn';
import { Search } from '#components/Icons/Search';

storiesOf('Icons', module)
  .add('ArrowBack', () => <ArrowBack />)
  .add('ArrowDown', () => <ArrowDown />)
  .add('ArrowUp', () => <ArrowUp />)
  .add('Back', () => <Back />)
  .add('Calendar', () => <Calendar />)
  .add('CheckBoxOff', () => <CheckBoxOff />)
  .add('CheckBoxOn', () => <CheckBoxOn />)
  .add('CircleClose', () => <CircleClose />)
  .add('Close', () => <Close />)
  .add('Filter', () => <Filter />)
  .add('Link', () => <Link />)
  .add('LogoMono', () => <LogoMono />)
  .add('Management', () => <Management />)
  .add('MoreVert', () => <MoreVert />)
  .add('RadioOff', () => <RadioOff />)
  .add('RadioOn', () => <RadioOn />)
  .add('Search', () => <Search />);
