import styled from 'styled-components';

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

  h1 {
    margin-top: 60px;
    margin-bottom: 20px;
    font-weight: 700;
  }
  > h5 {
    margin-bottom: 60px;
    font-weight: 300;
  }
`;

export const OverlyBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
`;
