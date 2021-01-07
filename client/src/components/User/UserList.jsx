import React from 'react';
import styled from 'styled-components';
import Variables from '../../styles/VariableStyled';

const ColumnList = styled.div`
  border-radius: 6px;
  background-color: ${Variables.grey3};
  padding: 20px;
  min-height: 50vh;
`;

const UserList = ({ children }) => {
  return (
    <>
      <ColumnList>{children}</ColumnList>
    </>
  );
};

export default UserList;
