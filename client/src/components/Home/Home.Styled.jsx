import styled from 'styled-components';
import Variables from '../../styles/VariableStyled';

export const Gridolumn = styled.div`
  display: grid;
  grid-template-columns: 800px 1fr;
  height: 100vh;
`;

export const Column = styled.div`
  padding: 100px;
  :last-child {
    background-color: #f5f6fa;
  }
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    margin-top: 60px;
    margin-bottom: 20px;
    font-weight: 700;
  }
  > h5 {
    margin-bottom: 60px;
    font-weight: 300;
  }
`;

export const HeadeingForm = styled.div`
  h1 {
    color: ${Variables.blueNight2};
    font-size: 60px;
    font-weight: 700;
  }
`;

export const Line = styled.div`
  display: block;
  margin: 40px 0;
  background-color: ${Variables.red2};
  width: 80px;
  height: 2px;
`;
