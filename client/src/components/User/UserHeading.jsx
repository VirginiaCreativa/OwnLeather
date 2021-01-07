import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Variables from '../../styles/VariableStyled';

const Headign = styled.div`
  margin-bottom: 40px;
  h1 {
    color: ${Variables.blueNight2};
  }
  h6 {
    letter-spacing: 1px;
    color: ${Variables.grey2};
    font-weight: 300;
  }
`;

const UserHeading = () => {
  const userDatas = useSelector((state) => state.Userign.userDatas);
  return (
    <Headign>
      <h1>{userDatas.namefull}</h1>
      <h6>{userDatas.email}</h6>
    </Headign>
  );
};

export default UserHeading;
