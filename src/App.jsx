/* eslint-disable no-shadow */
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import theme from './theme';
import GlobalStyle from './theme/globalStyles';
import TipCalculator from './container/TipCalculator';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.h1`
  color: ${({ theme }) => theme.color.neutral.darkest};
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.42em;
  line-height: 36px;
  margin-bottom: 40px;
  max-width: 100px;
  text-align: center;
  text-transform: uppercase;
  word-break: break-all;
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Container>
      <Logo>splitter</Logo>
      <TipCalculator />
    </Container>
  </ThemeProvider>
);

export default App;
