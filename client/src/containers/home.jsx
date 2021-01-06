import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Gridolumn = styled.div`
  display: grid;
  grid-template-columns: 800px 1fr;
  height: 100vh;
`;

const Column = styled.div`
  overflow: hidden;
  img {
    max-width: 105%;
  }
`;

const Home = () => {
  const history = useHistory();
  // localStorage.setItem('nombredeusuario', 'John');
  // console.log(window.localStorage);
  // localStorage.clear();
  useEffect(() => {
    if (window.localStorage.length === 1) {
      history.push('/login');
    }
  });
  return (
    <>
      <Gridolumn>
        <Column>
          <img
            src="https://images.pexels.com/photos/614971/pexels-photo-614971.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="background leather"
          />
        </Column>
        <Column>Colunm 2</Column>
      </Gridolumn>
    </>
  );
};

export default Home;
