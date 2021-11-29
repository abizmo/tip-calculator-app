import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.neutral.darkest};
  border-radius: 16px;
  padding: 44px 24px 24px;
  width: 100%;
`;
const Row = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.color.neutral.lighter};
  font-size: 0.67rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  margin: 0;
  width: fit-content;

  & small {
    color: ${({ theme }) => theme.color.neutral.dark};
    display: block;
    font-size: 0.55rem;
    margin: 0;
    width: max-content;
  }
`;

const Total = styled.h2`
  color: ${({ theme }) => theme.color.primary};
  margin: 0;
`;

const Button = styled.button.attrs({
  type: 'button',
})`
  background-color: ${({ theme }) => theme.color.primary};
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.color.neutral.darkest};
  font-family: ${({ theme }) => theme.typography.family.body};
  font-size: 0.84rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  padding: 16px;
  text-transform: uppercase;
  width: 100%;
`;

const TotalBox = () => (
  <Container>
    <Row>
      <Title>
        Tip Amount
        <small>/ person</small>
      </Title>
      <Total>$4.27</Total>
    </Row>
    <Row>
      <Title>
        Total
        <small>/ person</small>
      </Title>
      <Total>$32.79</Total>
    </Row>
    <Button type="button">reset</Button>
  </Container>
);

export default TotalBox;
