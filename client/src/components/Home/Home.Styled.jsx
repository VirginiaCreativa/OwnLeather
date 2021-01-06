import styled from 'styled-components';
import Variables from '../../styles/VariableStyled';

export const Gridolumn = styled.div`
  display: grid;
  grid-template-columns: 900px 1fr;
  height: 100vh;
`;

export const Column = styled.div`
  padding: 100px;
  :last-child {
    background-color: #f5f6fa;
    padding: 100px 160px;
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

export const Form = styled.form`
  button {
    font-weight: 600;
  }
  p {
    margin: 40px 0;
    color: ${Variables.grey2};
    a {
      margin-left: 6px;
      color: ${Variables.red2};
      :hover {
        text-decoration: underline !important;
        color: ${Variables.red1};
      }
    }
  }
`;

export const GroupForm = styled.div`
  margin: 20px 0;
  label,
  input {
    display: block;
    width: 100%;
  }
  input {
    margin-top: 10px;
    border: none;
    border-radius: 4px;
    padding: 15px 20px;
  }
`;
