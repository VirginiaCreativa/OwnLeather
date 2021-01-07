import React from 'react';
import styled from 'styled-components';
import Variables from '../../styles/VariableStyled';

const ColumnList = styled.div`
  border-radius: 6px;
  background-color: ${Variables.grey3};
  padding: 20px;
  min-height: 50vh;
`;

const SubTitle = styled.div`
  display: flex;
  margin-bottom: 10px;
  i {
    margin-right: 10px;
    font-size: 30px;
  }
  h4 {
    margin-bottom: 0;
  }
`;
const Line = styled.div`
  display: block;
  margin-bottom: 20px;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const UserList = ({ children, icon, title }) => {
  return (
    <>
      <ColumnList>
        <SubTitle>
          <i className={`bx ${icon}`} />
          <h4>{title}</h4>
        </SubTitle>
        <Line />
        {children}
      </ColumnList>
    </>
  );
};

export default UserList;
