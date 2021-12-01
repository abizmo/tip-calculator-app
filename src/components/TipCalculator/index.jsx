import styled from 'styled-components';

const TipCalculator = styled.div`
  background-color: ${({ theme }) => theme.color.neutral.white};
  border-radius: 16px 16px 0 0;
  height: 500px;
  width: 100%;
  max-width: 375px;

  @media(min-width: 1024px) {
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    max-width: 920px;
  }
`;

export default TipCalculator;
