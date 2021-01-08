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
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  i {
    margin-right: 10px;
    font-size: 30px;
  }
  h4 {
    margin-bottom: 0;
  }
  h6 {
    letter-spacing: 0.5px;
    color: ${Variables.grey2};
    font-weight: 400;
  }
`;
const Line = styled.div`
  display: block;
  margin-bottom: 20px;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const Col = styled.div`
  display: flex;
`;

const UserColumn = ({ children, icon, title, user }) => {
  return (
    <>
      <ColumnList>
        <SubTitle>
          <Col>
            <i className={`bx ${icon}`} />
            <h4>{title}</h4>
          </Col>
          <Col>
            <h6>{user}</h6>
          </Col>
        </SubTitle>
        <Line />
        {children}
      </ColumnList>
    </>
  );
};

export default UserColumn;
