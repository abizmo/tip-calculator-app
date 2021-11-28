import React from 'react';
import styled from 'styled-components';

import Input from '../../components/input';
import dollar from '../../assets/images/icon-dollar.svg';
import person from '../../assets/images/icon-person.svg';

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
    <div>
      <h3>Select Tip %</h3>
      <label className="container" htmlFor="five">
        5%
        <input checked="checked" id="five" name="tip" type="radio" />
        <span className="checkmark" />
      </label>
      <label className="container" htmlFor="five">
        10%
        <input checked="checked" id="ten" name="tip" type="radio" />
        <span className="checkmark" />
      </label>
      <label className="container" htmlFor="five">
        15%
        <input checked="checked" id="fifteen" name="tip" type="radio" />
        <span className="checkmark" />
      </label>
      <label className="container" htmlFor="five">
        25%
        <input checked="checked" id="twenty-five" name="tip" type="radio" />
        <span className="checkmark" />
      </label>
      <label className="container" htmlFor="five">
        50%
        <input checked="checked" id="fifty" name="tip" type="radio" />
        <span className="checkmark" />
      </label>
      <label className="container" htmlFor="five">
        Custom
        <input checked="checked" id="custom" name="tip" type="radio" />
        <span className="checkmark" />
      </label>
    </div>

    <Input icon={person} label="Number of People" />

    <div>
      <div>
        <h3>
          Tip Amount
          <small>/ person</small>
        </h3>
        <h2>$4.27</h2>
      </div>
      <div>
        <h3>
          Total
          <small>/ person</small>
        </h3>
        <h2>$32.79</h2>
      </div>
      <button type="button">reset</button>
    </div>
  </Container>
);

export default TipCalculator;
