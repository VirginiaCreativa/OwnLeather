import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Variables from '../../styles/VariableStyled';

const StyledTitle = styled.div`
  display: flex;
  margin-top: 10px;
  h3 {
    margin-bottom: 10px;
    color: ${Variables.black2};
  }
  i {
    position: relative;
    top: 2px;
    margin-right: 10px;
    color: ${Variables.grey2};
    font-size: 30px;
  }
`;

const Line = styled.div`
  display: block;
  margin-bottom: 10px;
  background-color: ${Variables.grey3};
  width: 100%;
  height: 2px;
`;

const UserTitle = () => {
  return (
    <>
      <StyledTitle>
        <i className="bx bx-list-ul" />
        <h3>My lists</h3>
      </StyledTitle>
      <Line />
    </>
  );
};

export default UserTitle;
