import React from 'react';
import styled from 'styled-components';

import Input from '../../components/input';
import dollar from '../../assets/images/icon-dollar.svg';
import person from '../../assets/images/icon-person.svg';
import TotalBox from '../../components/TotalBox';
import Select from '../../components/Select';

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.neutral.white};
  border-radius: 24px 24px 0 0;
  flex: 1;
  padding: 38px 24px 32px;
  width: 100%;
`;

const TipCalculator = () => (
  <Container>
    <Input currency icon={dollar} label="Bill" />
    <Select />
    <Input icon={person} label="Number of People" />
    <TotalBox />
  </Container>
);

export default TipCalculator;
