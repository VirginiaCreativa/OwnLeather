import React from 'react';
import styled from 'styled-components';
import Variables from '../../styles/VariableStyled';

const Title = styled.div`
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
  margin-bottom: 30px;
  background-color: ${Variables.grey3};
  width: 100%;
  height: 2px;
`;

const UserTitle = () => {
  return (
    <>
      <Title>
        <i className="bx bx-list-ul" />
        <h3>My lists</h3>
      </Title>
      <Line />
    </>
  );
};

export default UserTitle;
