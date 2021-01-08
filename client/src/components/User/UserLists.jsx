import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  margin-bottom: 0;
  li {
    margin-bottom: 10px;
  }
`;

const UserLists = ({ children }) => {
  return <Ul>{children}</Ul>;
};

export default UserLists;
