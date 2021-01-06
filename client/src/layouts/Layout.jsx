import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Wrapper = styled.div`
  height: 800px;
`;
const Layouts = ({ children }) => {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default Layouts;
