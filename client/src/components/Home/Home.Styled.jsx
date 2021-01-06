import styled from 'styled-components';

export const Gridolumn = styled.div`
  display: grid;
  grid-template-columns: 800px 1fr;
  height: 100vh;
`;

export const Column = styled.div`
  padding: 60px;
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
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
