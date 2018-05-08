import React from 'react';
import { If } from 'react-extras';
import { Wrapper, Title } from './styles';

const Container = ({ title, children }) => (
  <Wrapper>
    <If condition={title} render={() => (
      <header>
        <Title>{title}</Title>
      </header>
    )} />
    {children}
  </Wrapper>
);

export default Container;
