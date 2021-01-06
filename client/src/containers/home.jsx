import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import HomeComponent from '../components/Home/Home';

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
      <HomeComponent />
    </>
  );
};

export default Home;
