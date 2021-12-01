import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 32px;
  position: relative;
`;

const Label = styled.h3`
  color: ${({ theme }) => theme.color.neutral.darker};
  font-size: 0.7rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  margin: 0 0 12px;
`;

const SelectBox = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
`;

const BoxRadio = styled.label`
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

const Custom = styled.input`
  background-color: ${({ theme }) => theme.color.neutral.lighter};
  border: 1px solid ${({ theme }) => theme.color.neutral.lighter};
  border-radius: 4px;
  color: ${({ theme }) => theme.color.neutral.darkest};
  font-family: ${({ theme }) => theme.typography.family.body};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  padding: 8px;
  text-align: right;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.color.neutral.darkest};
    opacity: 0.8;
  }
`;

const Select = () => (
  <Container>
    <Label>Select Tip %</Label>
    <SelectBox>
      <BoxRadio htmlFor="five">
        <input id="five" name="tip" type="radio" />
        <span>5%</span>
      </BoxRadio>
      <BoxRadio htmlFor="ten">
        <input id="ten" name="tip" type="radio" />
        <span>10%</span>
      </BoxRadio>
      <BoxRadio htmlFor="fifteen">
        <input id="fifteen" name="tip" type="radio" />
        <span>15%</span>
      </BoxRadio>
      <BoxRadio htmlFor="twenty-five">
        <input id="twenty-five" name="tip" type="radio" />
        <span>25%</span>
      </BoxRadio>
      <BoxRadio htmlFor="fifty">
        <input id="fifty" name="tip" type="radio" />
        <span>50%</span>
      </BoxRadio>
      <Custom id="custom" name="tip" placeholder="Custom" type="text" />
    </SelectBox>
  </Container>
);

export default Select;
