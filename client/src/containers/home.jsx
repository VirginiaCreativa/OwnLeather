import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();
  localStorage.setItem('bgcolor', 'red');
  // localStorage.clear();
  useEffect(() => {
    if (window.localStorage.length === 0) {
      history.push('/signup');
    }
  });
  return (
    <>
      <h1>HOME</h1>
    </>
  );
};

export default Home;
