import React from 'react';
import styled from 'styled-components';

import dollarIcon from '../../../assets/images/icon-dollar.svg';
import peopleIcon from '../../../assets/images/icon-person.svg';
import InputGroup, { Input, Label } from '../Input';

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
      <label htmlFor="five">
        5%
        <input type="radio" name="tip" id="five" />
      </label>
      <label htmlFor="ten">
        10%
        <input type="radio" name="tip" id="ten" />
      </label>
      <label htmlFor="fifteen">
        15%
        <input type="radio" name="tip" id="fifteen" />
      </label>
      <label htmlFor="twenty-five">
        25%
        <input type="radio" name="tip" id="twenty-five" />
      </label>
      <label htmlFor="fifty">
        50%
        <input type="radio" name="tip" id="fifty" />
      </label>
      <Input
        id="custom"
        name="tip"
        placeholder="Custom"
        type="number"
      />
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
