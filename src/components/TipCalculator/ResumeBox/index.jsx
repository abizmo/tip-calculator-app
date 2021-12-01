import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Total from './Total';

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.neutral.darkest};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;

  @media(min-width: 1024px) {
    flex: 1;
  }
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.color.primary};
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.color.neutral.darkest};
  font-family: ${({ theme }) => theme.typography.family.body};
  font-size: .84rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  padding: 16px;
  text-transform: uppercase;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.color.hover};
    cursor: pointer;
  }
`;

const ResumeBox = ({ onReset, tipAmount, total }) => (
  <Container>
    <div>
      <Total
        subtitle="/ person"
        title="Tip Amount"
        total={tipAmount}
      />
      <Total
        subtitle="/ person"
        title="Total"
        total={total}
      />
    </div>
    <Button onClick={onReset} type="button">Reset</Button>
  </Container>
);

ResumeBox.propTypes = {
  onReset: PropTypes.func.isRequired,
  tipAmount: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default ResumeBox;
