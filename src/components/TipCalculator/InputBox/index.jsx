import React from 'react';
import styled from 'styled-components';

import dollarIcon from '../../../assets/images/icon-dollar.svg';
import peopleIcon from '../../../assets/images/icon-person.svg';
import InputGroup, { Label } from '../Input';
import RadioGroup from '../Input/RadioInput';

const Container = styled.div`
  display: flex;
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
    value: 5,
  },
  {
    id: 'ten',
    label: '10%',
    name: 'tip',
    value: 10,
  },
  {
    id: 'fifteen',
    label: '15%',
    name: 'tip',
    value: 15,
  },
  {
    id: 'twenty-five',
    label: '25%',
    name: 'tip',
    value: 25,
  },
  {
    id: 'fifty',
    label: '50%',
    name: 'tip',
    value: 50,
  },
];

const InputBox = ({
// eslint-disable-next-line react/prop-types
  bill, onChange, people,
}) => (
  <Container>
    <InputGroup
      icon={dollarIcon}
      id="bill"
      onChange={onChange}
      placeholder="0"
      step="0.01"
      title="Bill"
      type="number"
      value={bill}
    />
    <div>
      <Label>Select Tip %</Label>
      <RadioGroup inputsData={inputsData} onChange={onChange} />
    </div>
    <InputGroup
      icon={peopleIcon}
      id="people"
      onChange={onChange}
      placeholder="0"
      step="1"
      title="Number of People"
      type="number"
      value={people}
    />
  </Container>
);

export default InputBox;
