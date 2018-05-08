import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 740px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.akaroa};
  text-align: center;
  position: relative;
  display: block;
`;
