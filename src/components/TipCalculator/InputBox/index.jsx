import React from 'react';
import styled from 'styled-components';

import dollarIcon from '../../../assets/images/icon-dollar.svg';
import peopleIcon from '../../../assets/images/icon-person.svg';
import InputGroup, { Input, Label } from '../Input';
import RadioGroup from '../Input/RadioInput';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 32px;
  justify-content: space-between;
  padding: 0 8px;

  @media(min-width: 1024px) {
    gap: 40px;
    padding: 16px;
  }
`;

const inputsData = [
  {
    id: 'five',
    label: '5%',
    name: 'tip',
  },
  {
    id: 'ten',
    label: '10%',
    name: 'tip',
  },
  {
    id: 'fifteen',
    label: '15%',
    name: 'tip',
  },
  {
    id: 'twenty-five',
    label: '25%',
    name: 'tip',
  },
  {
    id: 'fifty',
    label: '50%',
    name: 'tip',
  },
];

const InputBox = () => (
  <Container>
    <InputGroup
      icon={dollarIcon}
      id="bill"
      placeholder="0"
      title="Bill"
      type="number"
    />
    <div>
      <Label>Select Tip %</Label>
      <RadioGroup inputsData={inputsData}>
        <Input
          id="custom"
          name="tip"
          placeholder="Custom"
          type="number"
        />
      </RadioGroup>
    </div>
    <InputGroup
      icon={peopleIcon}
      id="people"
      placeholder="0"
      title="Number of People"
      type="number"
    />
  </Container>
);

export default InputBox;
