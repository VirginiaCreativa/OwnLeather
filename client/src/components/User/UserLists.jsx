import React from 'react';
import styled from 'styled-components';
import Variables from '../../styles/VariableStyled';

const Ul = styled.ul`
  margin: 0;
  margin-bottom: 0;
  padding: 0;
  li {
    margin-bottom: 10px;
    border-bottom: 1px solid #fff;
    padding-bottom: 10px;
    list-style: none;
    :last-child {
      border-bottom: none;
    }
    p {
      margin-bottom: 0;
      font-size: 1.05rem;
      font-weight: 500;
    }
    span {
      font-size: 0.8rem;
      :last-child {
        color: ${Variables.grey2};
        font-size: 0.7rem;
      }
    }
  }
`;

const UserLists = ({ children }) => {
  return <Ul>{children}</Ul>;
};

export default UserLists;
