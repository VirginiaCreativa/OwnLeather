import styled from 'styled-components';

export const Gridolumn = styled.div`
  display: grid;
  grid-template-columns: 700px 1fr;
  height: 100vh;
`;

export const Column = styled.div`
  position: relative;
  padding: 60px;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    max-width: 109%;
  }
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
`;
