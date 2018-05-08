import React from 'react';
import { If } from 'react-extras';
import { Wrapper, Title } from './styles';

const Container = ({ title, children }) => (
  <Wrapper>
    <If condition={title} render={() => (
      <Title>{title}</Title>
    )} />
    {children}
  </Wrapper>
);

export default Container;
