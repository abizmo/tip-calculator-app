import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import InputBox from './InputBox';
import ResumeBox from './ResumeBox';

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.neutral.white};
  border-radius: 16px 16px 0 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 375px;
  padding: 32px 24px;
  width: 100%;

  @media(min-width: 1024px) {
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    flex-direction: row;
    gap: 30px;
    max-width: 968px;
    padding: 32px;
  }
`;

const initialInputs = {
  bill: 0,
  people: 0,
  tip: 0,
};

const initialResult = {
  tipAmount: 0,
  total: 0,
};

const TipCalculator = () => {
  const [inputs, setInputs] = useState(initialInputs);
  const [result, setResult] = useState(initialResult);
  const { bill, people, tip } = inputs;
  const { tipAmount, total } = result;

  useEffect(() => {
    if (people !== 0) {
      setResult({
        tipAmount: (bill * tip) / (100 * people),
        total: (bill + (bill * tip) / 100) / people,
      });
    }
  }, [bill, tip, people]);

  const handleInputsChange = ({ name, value }) => setInputs({
    ...inputs,
    [name]: parseFloat(value, 10),
  });

  const hanldeReset = () => {
    setInputs(initialInputs);
    setResult(initialResult);
  };

  return (
    <Container>
      <InputBox bill={bill} onChange={handleInputsChange} people={people} tip={tip} />
      <ResumeBox
        onReset={hanldeReset}
        tipAmount={tipAmount}
        total={total}
      />
    </Container>
  );
};

export default TipCalculator;
