// Dependencies
import * as React from 'react';
// Styled
import { Wrapper, Body, Name, Role, Email, Phone, Thumbnail, Image } from './CardStyle';
// Props
import { CardProps, defaultProps } from './CardProps';
// Components
import { LogoMono } from '../Icons/LogoMono';
import { Garfield } from '../Colors/Institutional/Garfield';

const Card = (props:CardProps) => {
  const componentProps = { ...defaultProps, ...props };
  const {
    classes,
    email,
    image,
    name,
    phone,
    role,
  } = componentProps;

  return (
    <Wrapper classes={ classes.wrapper }>
      <Body classes={ classes.body }>
        <Name classes={ classes.name }>{ name }</Name>
        <Role classes={ classes.role }>{ role }</Role>
        <Email classes={ classes.email }>{ email }</Email>
        <Phone classes={ classes.phone }>{ phone }</Phone>
      </Body>
      <Thumbnail classes={ classes.thumbnail }>
        { typeof image !== 'undefined'
          ? <Image classes={ classes.image } source={ image } />
          : (
            <LogoMono
              fillColor={ Garfield.G900 }
              height={ 40 }
              width={ 40 }
            />
          )
        }
      </Thumbnail>
    </Wrapper>
  );
};

export { Card };
