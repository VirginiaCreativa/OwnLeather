import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Header from './Header/Header';

import { UserDatas } from '../redux/actions/UserAction';

const Wrapper = styled.div`
  min-height: 90vh;
`;

const Layouts = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = localStorage.getItem('formDatas')
      ? JSON.parse(localStorage.getItem('formDatas'))
      : {};
    dispatch(UserDatas(getData));
  });
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default Layouts;
