import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.neutral.white};
  border-radius: 16px 16px 0 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 500px;
  max-width: 375px;
  padding: 32px;
  width: 100%;

  @media(min-width: 1024px) {
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    flex-direction: row;
    max-width: 920px;
  }
`;

const Div = styled.div`
  background-color: blanchedalmond;
  flex: 1;
`;

const TipCalculator = () => (
  <Container>
    <Div />
    <Div />
  </Container>
);

export default TipCalculator;
