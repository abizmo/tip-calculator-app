import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 32px;
  position: relative;
`;

const Icon = styled.img`
  position: absolute;
  bottom: 26px;
  left: 16px;
`;

const BoxInput = styled.input`
  appearance: none;
  background-color: ${({ theme }) => theme.color.neutral.lighter};
  border: 1px solid ${({ theme }) => theme.color.neutral.lighter};
  border-radius: 4px;
  color: ${({ theme }) => theme.color.neutral.darkest};
  font-family: ${({ theme }) => theme.typography.family.body};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  padding: 16px 18px 16px 43px;
  text-align: right;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.color.neutral.darkest};
  }

  /* Remove arrow number */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type=number] {
    -moz-appearance: textfield;
  }
`;

const Label = styled.h3`
  color: ${({ theme }) => theme.color.neutral.darker};
  font-size: 0.7rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  margin: 0 0 12px;
`;

const Input = ({ currency, icon, label }) => (
  <Container>
    <Label>{label}</Label>
    <Icon alt="icon" src={icon} />
    <BoxInput type="number" min={0} placeholder="0" step={currency ? 0.01 : 1} />
  </Container>
);

Input.propTypes = {
  currency: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

Input.defaultProps = {
  currency: false,
};

export default Input;
