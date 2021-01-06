import React from 'react';
import styled from 'styled-components';
import Header from './Header/Header';

const Wrapper = styled.div`
  min-height: 80vh;
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
