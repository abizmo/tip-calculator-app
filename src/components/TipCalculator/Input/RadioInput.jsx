import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  cursor: pointer;
  display: block;
  height: 100%;
  padding: 8px;
  margin-bottom: 32px;
  position: relative;
  width: 100%;
  
  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  & span {
    background-color: ${({ theme }) => theme.color.neutral.darkest};
    border: 1px solid ${({ theme }) => theme.color.neutral.darkest};
    border-radius: 4px;
    color: ${({ theme }) => theme.color.neutral.lighter};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    height: max-content;
    left: 0;
    padding: 8px;
    position: absolute;
    text-align: center;
    top: 0;
    width: 100%;
  }
  &:hover input ~ span {
    background-color: ${({ theme }) => theme.color.primary};
    border: 1px solid ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.neutral.darkest};
  }
  & input:checked ~ span {
    background-color: ${({ theme }) => theme.color.primary};
    border: 1px solid ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.neutral.darkest};
  }
`;
// eslint-disable-next-line react/prop-types
const RadioInput = ({ id, label, name }) => (
  <Label htmlFor={id}>
    <input type="radio" name={name} id={id} />
    <span>{label}</span>
  </Label>
);

const Container = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr;

  @media(min-width: 1024px)  {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

// eslint-disable-next-line react/prop-types
const RadioGroup = ({ children, inputsData }) => (
  <Container>
    {
      // eslint-disable-next-line react/prop-types
      inputsData.map(({ id, label, name }) => (
        <RadioInput id={id} label={label} name={name} />
      ))
    }
    { children && children }
  </Container>
);

export default RadioGroup;
