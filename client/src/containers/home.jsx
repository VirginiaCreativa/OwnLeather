import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

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
      <h1>HOME</h1>
    </>
  );
};

export default Home;
