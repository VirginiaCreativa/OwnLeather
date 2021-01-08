import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  margin: 0;
  margin-bottom: 0;
  padding: 0;
  li {
    margin-bottom: 10px;
    border-bottom: 1px solid #fff;
    padding-bottom: 10px;
    list-style: none;
    p {
      margin-bottom: 0;
      font-weight: 500;
    }
    span {
      font-size: 0.75rem;
    }
  }
`;

const UserLists = ({ children }) => {
  return <Ul>{children}</Ul>;
};

export default UserLists;
